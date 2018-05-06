import { bind } from 'decko';
// import HttpActions from './HttpActions';

import { delay } from 'redux-saga';

class Api {
  // private actions: HttpActions;

  constructor(public baseUrl: string, public version: string = 'v1') {
    // this.actions = new HttpActions(`${baseUrl}/${version}`);
  }
}

export default Api;
