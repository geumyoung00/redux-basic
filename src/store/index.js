import { createSlice } from '@reduxjs/toolkit';

// const counterReducer = (state = { count: 0, isHidden: false }, action) => {
//   if (action.type === 'HIDDEN') {
//     return { ...state, isHidden: !state.isHidden };
//   }
//   if (action.type === 'INCREASE') {
//     return { ...state, count: state.count + 1 }
//   }

//   if (action.type === 'DECREASE') {
//     return { ...state, count: state.count - 1 }
//   }

//   if (action.type === 'INCREASE_10') {
//     return { ...state, count: state.count + action.amount }
//   }
//   return state;
// }

createSlice({
  name: 'counter',
  initialState: { count: 0, isHidden: false },
  reducers: {
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    },
    increaseBy10(state, action) {
      return state.count + action.amount;
    },
    toggle(state) {
      return !state.isHidden;
    },
  }
});

export default createSlice;