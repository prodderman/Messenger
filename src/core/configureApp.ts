import configureDeps from './configureDeps';
import { TYPES, container } from './configureIoc';
import configureStore, { createReducer } from './configureStore';

import { MessengerModule, AuthenticationModule } from 'modules';
import authWrapper from 'services/AuthWrapper';

import { ReducersMap } from 'shared/types/redux';
import { IAppData, Module, RootSaga, IAppReduxState, IReduxEntry } from 'shared/types/app';

function configureApp(data?: IAppData): IAppData {

  const modules: Module[] = [
    new AuthenticationModule(),
    new MessengerModule(),
  ];

  if (data) {
    return { ...data, modules };
  }

  const sharedReduxEntries: IReduxEntry[] = [
    authWrapper,
  ];

  const connectedSagas: RootSaga[] = [];
  const connectedReducers: ReducersMap<Partial<IAppReduxState>> = {};

  const { runSaga, store } = configureStore();
  try {
    container.getAll(TYPES.Store);
    container.rebind(TYPES.connectEntryToStore).toConstantValue(connectEntryToStore);
    container.rebind(TYPES.Store).toConstantValue(store);
  } catch {
    container.bind(TYPES.connectEntryToStore).toConstantValue(connectEntryToStore);
    container.bind(TYPES.Store).toConstantValue(store);
  }

  const dependencies = configureDeps(store);

  sharedReduxEntries.forEach(connectEntryToStore);
  modules.forEach((module: Module) => {
    module.dependencies = dependencies;
    module.store = store;
    if (module.getReduxEntry) {
      connectEntryToStore(module.getReduxEntry());
    }
  });

  function connectEntryToStore({ reducers, sagas }: IReduxEntry) {
    if (!store) {
      throw new Error('Cannot find store, while connecting module.');
    }

    if (reducers) {
      const keys = Object.keys(reducers) as Array<keyof typeof reducers>;
      const isNeedReplace: boolean = keys.reduce<boolean>((acc, key: keyof typeof reducers) => {
        const featureReducer = reducers[key];
        if (!connectedReducers[key] && featureReducer) {
          connectedReducers[key] = featureReducer;
          return true;
        }
        return acc || false;
      }, false);

      if (isNeedReplace) {
        store.replaceReducer(createReducer(connectedReducers as ReducersMap<IAppReduxState>));
      }
    }

    if (sagas && __CLIENT__) {
      sagas.forEach((saga: RootSaga) => {
        if (!connectedSagas.includes(saga) && runSaga) {
          runSaga(saga(dependencies));
          connectedSagas.push(saga);
        }
      });
    }
  }

  return { modules, store };
}

export default configureApp;
