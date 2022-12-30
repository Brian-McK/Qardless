import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import registerReducer from './registerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer
  }
});