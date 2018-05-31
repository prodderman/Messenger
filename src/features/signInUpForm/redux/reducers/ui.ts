import * as NS from '../../namespace';
import initial from '../initial';

// tslint:disable-next-line:max-line-length
function uiReducer(state: NS.IReduxState['ui'] = initial.ui, action: NS.Action): NS.IReduxState['ui'] {
  switch (action.type) {
    case 'SIGN_IN_UP_FORM:CHOOSE_TAB':
      return {
        activeFrom: action.payload,
      };
    default:
      return state;
  }
}

export default uiReducer;
