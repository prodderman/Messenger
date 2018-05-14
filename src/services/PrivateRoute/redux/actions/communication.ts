import * as NS from '../../namespace';
import { makeCommunicationActionCreators } from 'shared/helpers/redux';

export const { execute: loadCookie, completed: loadCookieSuccess, failed: loadCookieFail } =
  makeCommunicationActionCreators<NS.ILoadCookie, NS.ILoadCookieSuccess, NS.ILoadCookieFail>(
    'PRIVATE_ROUTE:LOAD_COOKIE', 'PRIVATE_ROUTE:LOAD_COOKIE_SUCCESS', 'PRIVATE_ROUTE:LOAD_COOKIE_FAIL',
  );
