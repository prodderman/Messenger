import * as NS from '../namespace';

const initialState: NS.IReduxState = {
  data: {
    hasAccess: null,
  },
  communication: {
    authorization: {
      isRequesting: false,
      error: '',
    },
    logOut: {
      isRequesting: false,
      error: '',
    },
  },
};

export default initialState;
