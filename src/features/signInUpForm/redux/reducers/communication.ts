import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initialState from '../initial';

export default combineReducers({
  authentication: makeCommunicationReducer<NS.IAuthentication, NS.IAuthenticationSuccess, NS.IAuthenticationFail>(
    'SIGN_IN_UP_FORM:AUTHENTICATION',
    'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS',
    'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL',
    initialState.communications.authentication,
  ),
} as ReducersMap<NS.IReduxState['communications']>);
