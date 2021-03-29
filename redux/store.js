import { createStore, applyMiddleware } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from './reducers';
import rootSagas from './sagas';
import { isServer } from '../isServer';

const sagaMiddleware = createMiddlewareSaga();
let middleware = applyMiddleware(sagaMiddleware);

if (!isServer) {
  middleware = applyMiddleware(sagaMiddleware, createLogger());
}

if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(
    applyMiddleware(sagaMiddleware, createLogger())
  );
}

const store = createStore(rootReducers, middleware);
sagaMiddleware.run(rootSagas);

export default store;
