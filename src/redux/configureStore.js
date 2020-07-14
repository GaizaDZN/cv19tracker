import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
