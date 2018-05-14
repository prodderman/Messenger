import * as NS from '../namespace';

const initialState: NS.IReduxState = {
  edit: {
    isLogin: null,
  },
  data: {
    accessInfo: {
      accessToken: null,
      refreshToken: null,
      timestamp: null,
    },
  },
  communication: {
    cookieFetching: {
      isRequesting: false,
      error: '',
    },
  },
};

export default initialState;
