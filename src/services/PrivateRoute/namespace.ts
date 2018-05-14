import { IPlainAction, IPlainFailAction, ICommunication, IAction } from 'shared/types/redux';
import { IAccessInfo } from 'shared/types/models';

export interface IReduxState {
  edit: {
    isLogin: boolean | null;
  };
  data: {
    accessInfo: IAccessInfo;
  };
  communication: {
    cookieFetching: ICommunication;
  };
}

export type ILoadCookie = IPlainAction<'PRIVATE_ROUTE:LOAD_COOKIE'>;
export type ILoadCookieSuccess = IAction<'PRIVATE_ROUTE:LOAD_COOKIE_SUCCESS', IAccessInfo>;
export type ILoadCookieFail = IPlainFailAction<'PRIVATE_ROUTE:LOAD_COOKIE_FAIL'>;

export type IPostToken = IPlainAction<'PRIVATE_ROUTE:POST_TOKEN'>;
export type IPostTokenSuccess = IAction<'PRIVATE_ROUTE:POST_TOKEN_SUCCESS', boolean>;
export type IPostTokenFail = IPlainFailAction<'PRIVATE_ROUTE:POST_TOKEN_FAIL'>;

export type ISetLogin = IAction<'PRIVATE_ROUTE:SET_LOGIN', boolean>;

export type Action =
  | ILoadCookie | ILoadCookieSuccess | ILoadCookieFail | IPostToken | IPostTokenSuccess | IPostTokenFail | ISetLogin;
