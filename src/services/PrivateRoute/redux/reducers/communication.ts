import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'shared/helpers/redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initialState from '../initial';

export default combineReducers({
  cookieFetching: makeCommunicationReducer<NS.ILoadCookie, NS.ILoadCookieSuccess, NS.ILoadCookieFail>(
    'PRIVATE_ROUTE:LOAD_COOKIE',
    'PRIVATE_ROUTE:LOAD_COOKIE_SUCCESS',
    'PRIVATE_ROUTE:LOAD_COOKIE_FAIL',
    initialState.communication.cookieFetching,
  ),
} as ReducersMap<NS.IReduxState['communication']>);
