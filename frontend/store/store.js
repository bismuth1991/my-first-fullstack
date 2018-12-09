import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const preloadedState = {};

const configureStore = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger),
);


export default configureStore;
