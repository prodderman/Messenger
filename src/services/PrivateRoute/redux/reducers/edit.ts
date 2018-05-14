import { combineReducers } from 'redux';
import { makeEditFieldReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

type loginState = NS.IReduxState['edit']['isLogin'];

function editReducer(state: loginState = initial.edit.isLogin, action: NS.Action): loginState {
  switch (action.type) {
    case 'PRIVATE_ROUTE:SET_LOGIN':
      return action.payload;
    default:
     return state;
  }
}

export default combineReducers({
  isLogin: editReducer,
}as ReducersMap<NS.IReduxState['edit']>);
