import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../actions';
import actionTypes from '../actions/actionTypes';

function* GetAPIFunction() {
  const response = yield axios.get('https://jsonplaceholder.typicode.com/users');
  if (response.status >= 200 && response.status <= 299) {
    yield put(actions.successGetUser(response.data));
  } else {
    yield put(actions.failedGetUser(response));
  }
}

export default function* watchIncreaseFunction() {
  yield takeLatest(actionTypes.REQUEST_GET_USER, GetAPIFunction);
}