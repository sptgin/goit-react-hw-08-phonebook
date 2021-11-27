import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

// const initContact = [];

// const contactReducer = createReducer(initContact, {
//   [addContact]: (state, { payload }) => {
//     const checkContact = state.some(
//       contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//     );
//     if (checkContact) {
//       alert(`${payload.name} is already exists`);
//       return state;
//     } else {
//       return [...state, payload];
//     }
//   },
//   [delContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

export const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => (state = payload),
});
