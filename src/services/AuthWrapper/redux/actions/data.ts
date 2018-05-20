import * as NS from '../../namespace';

export function changeAccess(payload: boolean | null): NS.IAccessChange {
  return {
    type: 'AUTH_WRAPPER:ACCESS_CHANGE',
    payload,
  };
}
