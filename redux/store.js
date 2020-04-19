import { createStore, applyMiddleware } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducers from './reducers';
import rootSagas from './sagas';
import { isServer } from '../isServer';

const sagaMiddleware = createMiddlewareSaga();
let middleware = [ sagaMiddleware ];

if (!isServer) {
  middleware = [ ...middleware, createLogger() ];
}

const store = createStore(rootReducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);

export default store;
