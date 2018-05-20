import { IPlainAction, IFailAction, ICommunication, IAction } from 'shared/types/redux';
import { IAccessInfo } from 'shared/types/models';

export interface IReduxState {
  data: {
    hasAccess: boolean | null;
  };
  communication: {
    authorization: ICommunication;
  };
}

export type IAuthorization = IPlainAction<'AUTH_WRAPPER:AUTHORIZATION'>;
export type IAuthorizationSuccess = IAction<'AUTH_WRAPPER:AUTHORIZATION_SUCCESS', boolean>;
export type IAuthorizationFail = IFailAction<'AUTH_WRAPPER:AUTHORIZATION_FAIL', boolean>;

export type IAccessChange = IAction<'AUTH_WRAPPER:ACCESS_CHANGE', boolean | null>;

export type Action =
  | IAuthorization  | IAuthorizationSuccess  | IAuthorizationFail | IAccessChange;
