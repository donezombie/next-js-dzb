import types from '../types';
import { produce } from 'immer';

const initialState = {
	isFetching: false,
  listTodos: []
};

const testReducer = (state = initialState, actions) => {
	return produce(state, draft => {
    switch (actions.type) {
      case types.TEST_REQUEST:
        draft.isFetching = true;
        break;

      case types.TEST_REQUEST_SUCCESS:
        draft.isFetching = false;
        draft.listTodos = actions.data;
				draft.error = null;
        break;

      case types.TEST_REQUEST_FAILED:
        draft.isFetching = false;
				draft.error = actions.error;
        break;

      default:
        break;
    }
  })
};

export default testReducer;