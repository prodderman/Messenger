import * as React from 'react';
import { bind } from 'decko';
import * as R from 'ramda';

import { injectable } from 'inversify';
import { inject, TYPES } from './configureIoc';

import { IFeatureEntry, Omit } from 'shared/types/app';

type FeatureLoader = () => Promise<IFeatureEntry<any, any, any>>;

interface IState {
  bootstrapped: boolean;
  mounted: boolean;
}

const bundles = new Map<FeatureLoader, IFeatureEntry<any, any, any>>();

function featureConnect<L extends Record<string, FeatureLoader>>(loaders: L, preloader?: React.ReactChild):
  // tslint:disable-next-line:max-line-length
  <Props extends { [K in keyof L]: any }>(WrappedComponent: React.ComponentType<Props>) => React.ComponentType<Omit<Props, keyof L>> {

  return <Props extends { [K in keyof L]: any }>(
    WrappedComponent: React.ComponentType<Props>,
  ): React.ComponentClass<Omit<Props, keyof L>> => {

    @injectable()
    class FeatureConnector extends React.PureComponent<Omit<Props, keyof L>, IState> {
      public state: IState = { bootstrapped: false, mounted: false };

      @inject(TYPES.connectEntryToStore)
      private connectFeatureToStore!: (entry: IFeatureEntry<any, any, any>) => void;

      public async bootstrap() {
        await this.load();
        this.setState({ bootstrapped: true });
      }

      public componentDidMount() {
        if (!this.state.bootstrapped) {
          this.load();
        }
        this.setState({ mounted: true });
      }

      public componentWillUnmount() {
        this.saveBundle = null;
        this.setState({ mounted: false });
      }

      public render() {
        if (!this.isAllBundlesLoaded()) {
          return preloader || null;
        } else {
          return <WrappedComponent {...this.getBundles()} {...this.props} />;
        }
      }

      @bind
      private async load() {
        const keys: Array<keyof L> = Object.keys(loaders);

        await Promise.all(
          keys.map((key) => {
            return loaders[key]().then(bundle => {
              this.connectFeatureToStore(bundle);
              if (this.saveBundle) {
                this.saveBundle(bundle, key);
              }
            });
          }),
        );

        this.saveBundle && this.state.mounted && this.forceUpdate();
      }

      private saveBundle: null | ((bundle: IFeatureEntry<any, any, any>, key: string) => void) = (bundle, key) => {
        bundles.set(loaders[key], bundle);
      }

      private getBundles(): Record<string, IFeatureEntry<any, any, any>> {
        return R.map(value => bundles.get(value) || {}, loaders);
      }

      @bind
      private isAllBundlesLoaded(): boolean {
        return Object.keys(loaders).every(key => Boolean(bundles.get(loaders[key])));
      }
    }

    return FeatureConnector;
  };
}

export default featureConnect;
