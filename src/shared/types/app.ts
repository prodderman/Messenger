import { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Store, Reducer, ActionCreator, Action } from 'redux';

import { SagaIterator } from 'redux-saga';

import { namespace as AuthWrapperNamespace } from 'services/AuthWrapper';
import { namespace as SignInUpFormNamespace } from 'features/signInUpForm';

import Api from 'services/api/Api';
import Storage from 'services/storage/Storage';

export abstract class Module<C = any> {
  public components?: C; // available componens to pass in other modules

  protected _store: Store<IAppReduxState> | null = null;
  protected _deps: IDependencies | null = null;

  protected extraComponents?: { [key: string]: React.ReactElement<any> | React.ComponentClass<any> | null; };

  public set store(store: Store<IAppReduxState>) {
    this._store = store;
  }

  public set dependencies(value: IDependencies) {
    this._deps = value;
  }

  protected get deps(): IDependencies | null {
    return this._deps || null;
  }

  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
  public getReduxEntry?(): IReduxEntry;

  public setExtraComponent(key: keyof C, component: React.ReactElement<any>): void {
    if (this.extraComponents) {
      this.extraComponents[key] = component;
    } else {
      throw new Error('Cannot set module extra component: no requirements found for extra component');
    }
  }
}

export interface IAppData {
  modules: Module[];
  store: Store<IAppReduxState>;
}

export interface IDependencies {
  api: Api;
  storage: Storage;
}

export type IDictionary<T, S extends string = string> = {
  [key in S]: T;
};

export interface IReduxEntry {
  reducers?: {[key in keyof IAppReduxState]?: Reducer<IAppReduxState[key]>};
  sagas?: RootSaga[];
}

export interface IFeatureEntry<
  C extends IDictionary<React.ReactType<any>, keyof C> | void,
  A extends IDictionary<ActionCreator<Action>, keyof A> | void,
  S extends IDictionary<(state: any, ...args: any[]) => any, keyof S> | void,
  > extends IReduxEntry {
  actions?: A;
  selectors?: S;
  containers?: C;
}

export interface IAppReduxState {
  authWrapper: AuthWrapperNamespace.IReduxState;
  signInUpForm: SignInUpFormNamespace.IReduxState;
}

export type Diff<T extends string, U extends string> =
  ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export type RootSaga = (deps: IDependencies) => () => SagaIterator;

export type Lang = 'en' | 'he';

export type Uid = number;

export interface IAssets {
  javascript: Record<string, string>;
  styles: Record<string, string>;
  assets: Record<string, string>;
}

export * from '../helpers/redux/namespace';
