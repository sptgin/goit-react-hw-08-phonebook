import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducer';
import { phoneBookApi } from '../services/phonebook-api';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});

//====================

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { phoneBookApi } from '../services/phoneBookAPI';
// import { filterSlice, authSlice } from './slice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };
// const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

// export const store = configureStore({
//   reducer: {
//     [phoneBookApi.reducerPath]: phoneBookApi.reducer,
//     filter: filterSlice.reducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(phoneBookApi.middleware),
// });
// export const perpsiststore = persistStore(store);
