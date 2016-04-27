import { combineReducers } from 'redux';
import { apiReducer } from './api';
import { commonReducer } from './common';

const reducers = combineReducers({
  apiReducer,
  commonReducer
});

export default reducers;
