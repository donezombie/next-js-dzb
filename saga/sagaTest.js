import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../actions';
import actionTypes from '../actions/actionTypes';

function* GetAPIFunction() {
  const data = yield axios.get('https://jsonplaceholder.typicode.com/users');
  if (data.status >= 200 && data.status <= 299) {
    yield put(actions.successGetUser(data));
  } else {
    yield put(actions.failedGetUser(data));
  }
}

export default function* watchIncreaseFunction() {
  yield takeLatest(actionTypes.REQUEST_GET_USER, GetAPIFunction);
}