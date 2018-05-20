export * from './view/containers';

import * as namespace from './namespace';
import { actions, selectors, reducer, getSaga } from './redux';

export { namespace, selectors, actions, reducer };

export default {
  reducers: { authWrapper: reducer },
  sagas: [getSaga],
};
