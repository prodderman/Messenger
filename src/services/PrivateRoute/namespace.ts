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

export type IAuthorization = IPlainAction<'PRIVATE_ROUTE:AUTHORIZATION'>;
export type IAuthorizationSuccess = IAction<'PRIVATE_ROUTE:AUTHORIZATION_SUCCESS', boolean>;
export type IAuthorizationFail = IFailAction<'PRIVATE_ROUTE:AUTHORIZATION_FAIL', boolean>;

export type IAccessChange = IAction<'PRIVATE_ROUTE:ACCESS_CHANGE', boolean | null>;

export type Action =
  | IAuthorization  | IAuthorizationSuccess  | IAuthorizationFail | IAccessChange;
