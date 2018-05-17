import { ICommunication, IFailAction, IPlainAction, IAction } from 'shared/types/redux';
import { ILogin } from 'shared/types/models';

export interface IReduxState {
  edit: {
    loginForm: ILogin;
  };
  ui: {};
  data: {
    hasAccess: boolean | null;
    message: string | null;
  };
  communications: {
    authentication: ICommunication;
  };
}

export interface IAuthenticationRequest {
  email: string;
  password: string;
}

export interface IAuthenticationResponse {
  hasAccess: boolean;
}

export type IAuthentication = IAction<'SIGN_IN_UP_FORM:AUTHENTICATION', IAuthenticationRequest>;
export type IAuthenticationSuccess = IAction<'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS', IAuthenticationResponse>;
export type IAuthenticationFail = IFailAction<'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL', IAuthenticationResponse>;

export type ILoginEmailChange = IAction<'SIGN_IN_UP_FORM:LOGIN_EMAIL_CHANGE', string>;
export type ILoginPasswordChange = IAction<'SIGN_IN_UP_FORM:LOGIN_PASSWORD_CHANGE', string>;

export interface ITab {
  tab: 'login' | 'register';
}

export type Action =
  | IAuthentication | IAuthenticationSuccess | IAuthenticationFail
  | ILoginEmailChange | ILoginPasswordChange;
