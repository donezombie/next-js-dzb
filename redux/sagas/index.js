import { fork, all } from 'redux-saga/effects';
import testSaga from './testSagas';

export default function* rootSaga() {
  yield all([
      fork(testSaga),
  ]);
}