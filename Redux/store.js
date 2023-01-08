import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import registerReducer from './registerSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

export default configureStore({
  reducer: {
    register: registerReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});