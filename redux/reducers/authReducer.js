import types from "../types";
import { produce } from "immer";

const initialState = {
  auth: {
    isLogin: false,
    error: null,
  },
};

const authReducer = (state = initialState, actions) => {
  return produce(state, (draft) => {
    switch (actions.type) {
      case types.LOGIN:
        draft.auth.isLogin = false;
        break;

      case types.LOGIN_SUCCESS:
        draft.auth.isLogin = true;
        break;

      case types.LOGIN_FAILED:
        draft.auth.isLogin = false;
        draft.auth.error = actions.error;
        break;

      case types.LOGOUT_SUCCESS:
        return initialState;

      case types.CHECK_LOCAL_STORAGE_SUCCESS:
        draft.auth.isLogin = true;

      default:
        break;
    }
  });
};

export default authReducer;
