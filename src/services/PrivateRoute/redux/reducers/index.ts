import { combineReducers } from 'redux';

import communicationReducer from './communication';
import dataReducer from './data';
import editReducer from './edit';

import * as NS from '../../namespace';

const reducer = combineReducers<NS.IReduxState>({
  communication: communicationReducer,
  data: dataReducer,
  edit: editReducer,
});

export default reducer;
