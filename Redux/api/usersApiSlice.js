import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dd51-80-233-51-205.eu.ngrok.io/api/",
  }),
  tagTypes: ["Endusers"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `endusers`,
      providesTags: ["Endusers"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body
      }),
      invalidatesTags: ["Endusers"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "endusers",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Endusers"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = usersApiSlice;
