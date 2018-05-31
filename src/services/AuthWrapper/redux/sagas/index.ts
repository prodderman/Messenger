import { takeLatest, call, put } from 'redux-saga/effects';
import getErrorMsg from 'shared/helpers/getErrorMsg';

import * as actions from '../actions';

import { IDependencies } from 'shared/types/app';
import { IAccessInfo } from 'shared/types/models';
import * as NS from '../../namespace';

const authorizationType: NS.IAuthorization['type'] = 'AUTH_WRAPPER:AUTHORIZATION';
const logOutType: NS.ILogOut['type'] = 'AUTH_WRAPPER:LOGOUT';

export default function getSaga(deps: IDependencies) {
  return function* saga() {
    yield takeLatest(authorizationType, executeAuthorization, deps);
    yield takeLatest(logOutType, executeLogOut, deps);
  };
}

export function* executeAuthorization({ storage, api }: IDependencies) {
  const response: IAccessInfo | null = yield call(storage.loadAccessInfo);
  if (!response) {
    yield put(actions.authorizationFail('access info not found', false));
    return;
  }

  try {
    const access = yield call(api.authorization, response);
    if (access) {
      yield put(actions.authorizationSuccess(access));
      return;
    } else {
      yield put(actions.authorizationFail('', access));
    }
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.authorizationFail(message, false));
  }
}

export function* executeLogOut({storage, api}: IDependencies) {
  try {
    yield call(storage.clearAccessInfo);
    yield call(api.logOut);
    yield put(actions.logOutSuccess(false));
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.logOutFail(message));
  }
}
