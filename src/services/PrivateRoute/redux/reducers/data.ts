import { combineReducers } from 'redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

type hasAccessState = NS.IReduxState['data']['hasAccess'];

function accessReducer(state: hasAccessState = initial.data.hasAccess, action: NS.Action): hasAccessState {
  switch (action.type) {
    case 'PRIVATE_ROUTE:AUTHORIZATION_SUCCESS':
      return action.payload;
    default: return state;
  }
}

export default combineReducers({
  hasAccess: accessReducer,
} as ReducersMap<NS.IReduxState['data']>);
