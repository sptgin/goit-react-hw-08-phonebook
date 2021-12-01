import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    setUser: (state, { payload }) => {
      state.user.name = payload.name;
      state.isLoggedIn = true;
    },
    setLogout: (state, _) => {
      state.name = '';
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const { setCredentials, setUser, setLogout } = authSlice.actions;
