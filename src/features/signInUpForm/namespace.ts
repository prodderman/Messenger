import { ICommunication, IPlainAction } from 'shared/types/redux';
/* tslint:disable no-empty-interface*/
export interface IReduxState {}

export type ISomeAction = IPlainAction<'FEATURE_NAME:SOME_ACTION'>;

export type Action =
  | ISomeAction;
