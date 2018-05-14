import { combineReducers } from 'redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

type accessInfoState = NS.IReduxState['data']['accessInfo'];

function cookieReducer(state: accessInfoState = initial.data.accessInfo, action: NS.Action): accessInfoState {
  switch (action.type) {
    case 'PRIVATE_ROUTE:LOAD_COOKIE_SUCCESS': {
      return action.payload;
    }
    default: return state;
  }
}

export default combineReducers({
  accessInfo: cookieReducer,
} as ReducersMap<NS.IReduxState['data']>);
