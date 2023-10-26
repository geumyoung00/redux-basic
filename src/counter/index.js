const reduxCounter = (state = { count: 0 }, action) => {
  if (action.type === 'INCREASE') {
    return { count: state.count + 1 }
  }

  if (action.type === 'DECREASE') {
    return { count: state.count - 1 }
  }

  if (action.type === 'INCREASE_10') {
    return { count: state.count + action.amount }
  }

  return state;
}

export default reduxCounter;