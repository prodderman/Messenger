import { combineReducers } from 'redux';

import communicationReducer from './communication';
import dataReducer from './data';

import * as NS from '../../namespace';

const reducer = combineReducers<NS.IReduxState>({
  communication: communicationReducer,
  data: dataReducer,
});

export default reducer;
