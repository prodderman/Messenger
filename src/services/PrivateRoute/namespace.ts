import { IPlainAction, IPlainFailAction, ICommunication, IAction } from 'shared/types/redux';
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
export type IAuthorizationFail = IPlainFailAction<'PRIVATE_ROUTE:AUTHORIZATION_FAIL'>;

export type Action =
  | IAuthorization  | IAuthorizationSuccess  | IAuthorizationFail;
