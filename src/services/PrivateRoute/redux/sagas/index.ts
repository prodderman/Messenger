import { takeLatest, call, put } from 'redux-saga/effects';
import getErrorMsg from 'shared/helpers/getErrorMsg';

import * as actions from '../actions';

import { IDependencies } from 'shared/types/app';
import { IAccessInfo } from 'shared/types/models';
import * as NS from '../../namespace';

const loadCookieType: NS.ILoadCookie['type'] = 'PRIVATE_ROUTE:LOAD_COOKIE';

export default function getSaga(deps: IDependencies) {
  return function* saga() {
    yield takeLatest(loadCookieType, executeCookieLoading, deps);
  };
}

export function* executeCookieLoading({ cookie }: IDependencies) {
  try {
    const response: IAccessInfo = yield call(cookie.loadCookie);
    yield put(actions.loadCookieSuccess(response));
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.loadCookieFail(message));
  }
}
