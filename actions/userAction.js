import actionTypes from './actionTypes';

export const requestGetUser = () => ({
  type: actionTypes.REQUEST_GET_USER,
})

export const successGetUser = (data) => ({
  type: actionTypes.REQUEST_GET_USER_SUCCESS,
  payload: data,
})

export const failedGetUser = (err) => ({
  type: actionTypes.REQUEST_GET_USER_FAILED
})