import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initialState from '../initial';

export default combineReducers({
  authorization: makeCommunicationReducer<NS.IAuthorization, NS.IAuthorizationSuccess, NS.IAuthorizationFail>(
    'AUTH_WRAPPER:AUTHORIZATION',
    'AUTH_WRAPPER:AUTHORIZATION_SUCCESS',
    'AUTH_WRAPPER:AUTHORIZATION_FAIL',
    initialState.communication.authorization,
  ),
  logOut: makeCommunicationReducer<NS.ILogOut, NS.ILogOutSuccess, NS.ILogOutFail>(
    'AUTH_WRAPPER:LOGOUT',
    'AUTH_WRAPPER:LOGOUT_SUCCESS',
    'AUTH_WRAPPER:LOGOUT_FAIL',
    initialState.communication.logOut,
  ),
} as ReducersMap<NS.IReduxState['communication']>);
