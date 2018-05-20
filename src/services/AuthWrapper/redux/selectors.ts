import { ICommunication } from 'shared/types/redux';
import { IReduxState } from '../namespace';
import { IAccessInfo } from 'shared/types/models';

export function selectAccess(state: IReduxState): boolean | null {
  return state.data.hasAccess;
}

export function selectCommunication(state: IReduxState): { authorization: ICommunication } {
  return state.communication;
}
