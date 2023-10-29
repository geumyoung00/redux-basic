import { createSlice, configureStore } from '@reduxjs/toolkit';

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


// const store = configureStore(counterReducer);
const counterSlice = createSlice({
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
      state.count = state.count + action.payload
    },
    toggle(state) {
      state.isHidden = !state.isHidden;
    },
  }
});
const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
