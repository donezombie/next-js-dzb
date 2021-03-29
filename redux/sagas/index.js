import { fork, all } from 'redux-saga/effects';
import authSaga from './authSaga';
import testSaga from './testSagas';

export default function* rootSaga() {
  yield all([
      fork(testSaga),
      fork(authSaga),
  ]);
}