const reduxCounter = (state = { count: 0, isHidden: false }, action) => {
  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + 1 }
  }

  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 }
  }

  if (action.type === 'INCREASE_10') {
    return { ...state, count: state.count + action.amount }
  }
  if (action.type === 'HIDDEN') {
    return { ...state, isHidden: !state.isHidden };
  }
  return state;
}

export default reduxCounter;