import * as NS from '../../namespace';
import { makeCommunicationActionCreators } from 'shared/helpers/redux';

export const { execute: authorization, completed: authorizationSuccess, failed: authorizationFail } =
  makeCommunicationActionCreators<NS.IAuthorization, NS.IAuthorizationSuccess, NS.IAuthorizationFail>(
    'AUTH_WRAPPER:AUTHORIZATION', 'AUTH_WRAPPER:AUTHORIZATION_SUCCESS', 'AUTH_WRAPPER:AUTHORIZATION_FAIL',
  );

export const { execute: logOut, completed: logOutSuccess, failed: logOutFail } =
  makeCommunicationActionCreators<NS.ILogOut, NS.ILogOutSuccess, NS.ILogOutFail>(
    'AUTH_WRAPPER:LOGOUT', 'AUTH_WRAPPER:LOGOUT_SUCCESS', 'AUTH_WRAPPER:LOGOUT_FAIL',
  );
