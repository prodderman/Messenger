import { Store } from 'redux';

import { IDependencies, IAppReduxState } from 'shared/types/app';

import Api from 'services/api/Api';
import Cookie from 'services/cookie/Cookie';

export default function configureDeps(store: Store<IAppReduxState>): IDependencies {
  const api = new Api('/api');
  const cookie = new Cookie();
  return { api, cookie };
}
