

export default (state = { count: 0 }, actions) => {
  switch (actions.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + 1
      }

    case 'DECREASE':
      return {
        ...state,
        count: state.count - 1
      }
  
    default:
      return state
  }
}