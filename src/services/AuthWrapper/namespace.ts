import { IPlainAction, IFailAction, ICommunication, IAction, IPlainFailAction } from 'shared/types/redux';
import { IAccessInfo } from 'shared/types/models';

export interface IReduxState {
  data: {
    hasAccess: boolean | null;
  };
  communication: {
    authorization: ICommunication;
    logOut: ICommunication;
  };
}

export type IAuthorization = IPlainAction<'AUTH_WRAPPER:AUTHORIZATION'>;
export type IAuthorizationSuccess = IAction<'AUTH_WRAPPER:AUTHORIZATION_SUCCESS', boolean>;
export type IAuthorizationFail = IFailAction<'AUTH_WRAPPER:AUTHORIZATION_FAIL', boolean>;

export type ILogOut = IPlainAction<'AUTH_WRAPPER:LOGOUT'>;
export type ILogOutSuccess = IAction<'AUTH_WRAPPER:LOGOUT_SUCCESS', boolean>;
export type ILogOutFail = IPlainFailAction<'AUTH_WRAPPER:LOGOUT_FAIL'>;

export type IAccessChange = IAction<'AUTH_WRAPPER:ACCESS_CHANGE', boolean | null>;

export type Action =
  | IAuthorization  | IAuthorizationSuccess | IAuthorizationFail
  | ILogOut         | ILogOutSuccess        | ILogOutFail
  | IAccessChange;
