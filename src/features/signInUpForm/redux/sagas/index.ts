import { put, call, takeLatest } from 'redux-saga/effects';
import getErrorMsg from 'shared/helpers/getErrorMsg';

import { SagaIterator } from 'redux-saga';
import { IDependencies } from 'shared/types/app';
import * as actions from '../actions';
import { ILogin, IAccessInfo } from 'shared/types/models';
import * as NS from '../../namespace';

const authenticationType: NS.IAuthentication['type'] = 'SIGN_IN_UP_FORM:AUTHENTICATION';

function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    yield takeLatest(authenticationType, authentication, deps);
  };
}

export function* authentication({ api, storage }: IDependencies, action: NS.IAuthentication) {
  const LoginData: ILogin = action.payload;

  try {
    const accessInfo: IAccessInfo = yield call(api.authentication, LoginData);
    if (accessInfo) {
      yield call(storage.writeAccessInfo, accessInfo);
      yield put(actions.authenticationSuccess({hasAccess: true}));
    } else {
      const message = 'Wrong Email or Password';
      yield put(actions.authenticationFail(getErrorMsg(message), {hasAccess: false}));
      return;
    }
  } catch (error) {
    yield put(actions.authenticationFail(getErrorMsg(error), {hasAccess: false}));
  }
}

export default getSaga;
