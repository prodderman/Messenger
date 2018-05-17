import * as NS from '../namespace';
import { error } from 'util';

const initialState: NS.IReduxState = {
  communications: {
    authentication: {
      isRequesting: false,
      error: '',
    },
  },
  data: {
    hasAccess: null,
    message: null,
  },
  edit: {
    loginForm: {
      email: '',
      password: '',
    },
  },
  ui: {

  },
};

export default initialState;
