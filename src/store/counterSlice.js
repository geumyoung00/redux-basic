import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, isHidden: false },
  reducer: {
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
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;