import { combineReducers } from 'redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

// tslint:disable-next-line:max-line-length
export default function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data'] {
  switch (action.type) {
    case 'SIGN_IN_UP_FORM:AUTHENTICATION': {
      return state;
    }
    case 'SIGN_IN_UP_FORM:AUTHENTICATION_SUCCESS': {
      return {
        hasAccess: true,
        message: null,
      };
    }
    case 'SIGN_IN_UP_FORM:AUTHENTICATION_FAIL': {
      return {
        hasAccess: false,
        message: action.error,
      };
    }
    default: return state;
  }
}
