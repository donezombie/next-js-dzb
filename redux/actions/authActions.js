import types from "redux/types";

export const login = (data) => ({
  ...data,
  type: types.LOGIN,
});

export const checkAuth = () => ({
  type: types.CHECK_LOCAL_STORAGE,
});

export const logout = () => ({
  type: types.LOGOUT
});