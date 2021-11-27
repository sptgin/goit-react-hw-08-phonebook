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
