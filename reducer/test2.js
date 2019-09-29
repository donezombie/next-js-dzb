import actionTypes from '../actions/actionTypes';


export default (state = { loading: false }, actions) => {
  switch (actions.type) {
    case actionTypes.REQUEST_GET_USER:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.REQUEST_GET_USER_SUCCESS:
      return {
        ...state,
        data: actions.payload,
        loading: false,
      }
  
    default:
      return state
  }
}