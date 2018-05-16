import * as NS from '../../namespace';
import { makeCommunicationActionCreators } from 'shared/helpers/redux';

export const { execute: authorization, completed: authorizationSuccess, failed: authorizationFail } =
  makeCommunicationActionCreators<NS.IAuthorization, NS.IAuthorizationSuccess, NS.IAuthorizationFail>(
    'PRIVATE_ROUTE:AUTHORIZATION', 'PRIVATE_ROUTE:AUTHORIZATION_SUCCESS', 'PRIVATE_ROUTE:AUTHORIZATION_FAIL',
  );
