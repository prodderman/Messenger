import * as NS from '../../namespace';
import {ILogin} from 'shared/types/models';

export function changeLoginEmail(payload: string): NS.ILoginEmailChange {
  return {
    type: 'SIGN_IN_UP_FORM:LOGIN_EMAIL_CHANGE',
    payload,
  };
}

export function changeLoginPassword(payload: string): NS.ILoginPasswordChange {
  return {
    type: 'SIGN_IN_UP_FORM:LOGIN_PASSWORD_CHANGE',
    payload,
  };
}
