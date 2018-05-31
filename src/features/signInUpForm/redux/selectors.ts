import { IAppReduxState } from 'shared/types/app';
import * as NS from '../namespace';
import { ILogin } from 'shared/types/models';
import { ICommunication } from 'shared/types/redux';

export function getSignInUpFormState(state: IAppReduxState): NS.IReduxState {
  return state.signInUpForm;
}

export function getLoginData(state: IAppReduxState): ILogin {
  return getSignInUpFormState(state).edit.loginForm;
}

export function getCommunicationsState(state: IAppReduxState): {authentication: ICommunication} {
  return getSignInUpFormState(state).communications;
}

export function getDataState(state: IAppReduxState): NS.IReduxState['data'] {
  return getSignInUpFormState(state).data;
}

export function getActiveFormState(state: IAppReduxState): NS.IFormActive {
  return getSignInUpFormState(state).ui.activeFrom;
}
