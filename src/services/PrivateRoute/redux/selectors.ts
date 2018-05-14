import { ICommunication } from 'shared/types/redux';
import { IReduxState } from '../namespace';
import { IAccessInfo } from 'shared/types/models';

export function selectCookie(state: IReduxState): IAccessInfo {
  return state.data.accessInfo;
}

export function selectLogin(state: IReduxState): boolean | null {
  return state.edit.isLogin;
}

export function selectCommunication(state: IReduxState): { cookieFetching: ICommunication } {
  return state.communication;
}
