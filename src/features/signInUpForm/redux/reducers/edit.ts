import * as NS from '../../namespace';
import initial from '../initial';

// tslint:disable-next-line:max-line-length
function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.Action): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'SIGN_IN_UP_FORM:LOGIN_EMAIL_CHANGE':
      return {
        loginForm: {
          email: action.payload,
          password: state.loginForm.password,
        },
      };
    case 'SIGN_IN_UP_FORM:LOGIN_PASSWORD_CHANGE':
      return {
        loginForm: {
          email: state.loginForm.email,
          password: action.payload,
        },
      };
    default:
      return state;
  }
}

export default editReducer;
