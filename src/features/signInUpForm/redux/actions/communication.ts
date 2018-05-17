import { makeCommunicationActionCreators } from 'shared/helpers/redux';
import * as NS from '../../namespace';

export const { execute: authentication, completed: authenticationSuccess, failed: authenticationFail } =
  makeCommunicationActionCreators<NS.IAuthentication, NS.IAuthenticationSuccess, NS.IAuthenticationFail>(
    'SIGN_IN_UP_FORM:AUTHENTICATION',
    'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS',
    'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL',
  );
