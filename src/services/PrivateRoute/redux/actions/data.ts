import * as NS from '../../namespace';

export function changeAccess(payload: boolean | null): NS.IAccessChange {
  return {
    type: 'PRIVATE_ROUTE:ACCESS_CHANGE',
    payload,
  };
}
