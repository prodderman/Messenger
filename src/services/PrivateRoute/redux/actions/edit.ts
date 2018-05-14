import * as NS from '../../namespace';

export function setLogin(payload: boolean): NS.ISetLogin {
  return {
    type: 'PRIVATE_ROUTE:SET_LOGIN',
    payload,
  };
}
