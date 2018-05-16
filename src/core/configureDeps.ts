import { Store } from 'redux';

import { IDependencies, IAppReduxState } from 'shared/types/app';

import Api from 'services/api/Api';
import Storage from 'services/storage/Storage';

export default function configureDeps(store: Store<IAppReduxState>): IDependencies {
  const api = new Api('/api');
  const storage = new Storage();
  return { api, storage };
}
