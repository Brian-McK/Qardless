import { configureStore } from '@reduxjs/toolkit';
import { usersApiSlice } from './api/usersApiSlice';
import { certificatesApiSlice } from './api/certificatesApiSlice';
import registerReducer from './registerSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

export default configureStore({
  reducer: {
    register: registerReducer, 
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [certificatesApiSlice.reducerPath]: certificatesApiSlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(usersApiSlice.middleware),
});