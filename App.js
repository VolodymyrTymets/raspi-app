import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';
import MainView from './app/views/Main';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const configureStore = initialState => {
  const enhance = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducers, initialState, enhance);
};

const store = configureStore({});


const App = () =>
  <Provider store={store}>
    <MainView />
  </Provider>;


export default App;