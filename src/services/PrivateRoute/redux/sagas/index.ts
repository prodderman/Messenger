import { takeLatest, call, put } from 'redux-saga/effects';
import getErrorMsg from 'shared/helpers/getErrorMsg';

import * as actions from '../actions';

import { IDependencies } from 'shared/types/app';
import { IAccessInfo } from 'shared/types/models';
import * as NS from '../../namespace';

const authorizationType: NS.IAuthorization['type'] = 'PRIVATE_ROUTE:AUTHORIZATION';

export default function getSaga(deps: IDependencies) {
  return function* saga() {
    yield takeLatest(authorizationType, executeAuthorization, deps);
  };
}

export function* executeAuthorization({ storage, api }: IDependencies) {
  const response: IAccessInfo | null = yield call(storage.loadAccessInfo);
  if (!response) {
    yield put(actions.authorizationSuccess(false));
    return;
  }

  try {
    // yield put(actions.loadCookieSuccess(response));
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.authorizationFail(message));
  }
}
