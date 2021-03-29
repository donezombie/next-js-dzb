import { takeLatest, put } from 'redux-saga/effects';
import authServices from 'services/authServices';
import types from '../types';

function* login({ username, password }) {
  try {
    if (username === "don" && password === "don") {
      yield put({ type: types.LOGIN_SUCCESS });
      authServices.saveInfoToStorage();
    } else {
      yield put({ type: types.LOGIN_FAILED, error });  
    }
  } catch (error) {
    yield put({ type: types.LOGIN_FAILED, error });
  }
}

function* checkAuth() {
  const isLoggedStorage = window.localStorage.getItem('isLogged') === "true";
  if (isLoggedStorage) {
    yield put({ type: types.CHECK_LOCAL_STORAGE_SUCCESS });
  }
}

function* logout() {
  window.localStorage.clear();
  yield put({ type: types.LOGOUT_SUCCESS }); 
}

export default function* watchTestSaga() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.LOGOUT, logout);
  yield takeLatest(types.CHECK_LOCAL_STORAGE, checkAuth);
}