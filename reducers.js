import { combineReducers } from 'redux';

const reducers = combineReducers({
  test: (state, action) => state || {},
});

export default reducers;
