import * as NS from '../namespace';

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
    activeFrom: 'login',
  },
};

export default initialState;
