import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initialState from '../initial';

export default combineReducers({
  authorization: makeCommunicationReducer<NS.IAuthorization, NS.IAuthorizationSuccess, NS.IAuthorizationFail>(
    'PRIVATE_ROUTE:AUTHORIZATION',
    'PRIVATE_ROUTE:AUTHORIZATION_SUCCESS',
    'PRIVATE_ROUTE:AUTHORIZATION_FAIL',
    initialState.communication.authorization,
  ),
} as ReducersMap<NS.IReduxState['communication']>);
