import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://f65a-64-43-50-159.eu.ngrok.io/api",
  }),
  tagTypes: ['Enduser'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `enduser`,
      providesTags: ['Enduser']
    }),
    loginUser: builder.query({
      query: (body) => ({
        url: "enduser",
        method: "POST",
        body,
      }), 
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "enduser",
        method: "POST",
        body,
      }),
      invalidatesTags: ['Enduser']
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = usersApiSlice;
