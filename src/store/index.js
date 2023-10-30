import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import counterReducer from './counterSlice';

// const store = configureStore(counterReducer);
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { count: 0, isHidden: false },
//   reducers: {
//     increase(state) {
//       state.count++
//     },
//     decrease(state) {
//       state.count--
//     },
//     increaseBy10(state, action) {
//       state.count = state.count + action.payload
//     },
//     toggle(state) {
//       state.isHidden = !state.isHidden;
//     },
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { isAuth: false },
//   reducers: {
//     login(state) {
//       state.isAuth = true;
//     },
//     logout(state) {
//       state.isAuth = false
//     }
//   }
// })

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

// export const authActions = authSlice.actions;
// export const counterActions = counterSlice.actions;

export default store;
