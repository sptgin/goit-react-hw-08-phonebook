import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts'],

  endpoints: build => ({
    getContacts: build.query({
      query: () => `contacts`,

      providesTags: result =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    delContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
    }),
    signup: build.mutation({
      query: userData => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    login: build.mutation({
      query: userData => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    getCurrentUser: build.query({
      query: () => '/users/current',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {
  useGetContactsQuery,
  useDelContactMutation,
  useAddContactMutation,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} = phoneBookApi;
