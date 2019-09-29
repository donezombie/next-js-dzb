/* global fetch */

import { all, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import watchIncreaseFunction from './sagaTest';

es6promise.polyfill()

function * rootSaga () {
  yield all([
    fork(watchIncreaseFunction),
  ])
}

export default rootSaga