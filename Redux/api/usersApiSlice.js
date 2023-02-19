import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2e5e-80-233-61-249.eu.ngrok.io/",
  }),
  tagTypes: ["Endusers"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `endusers`,
      providesTags: ["Endusers"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "endusers/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Endusers"],
    }),
    logoutUser: builder.mutation({
      query: (body) => ({
        url: `endusers/logout`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Endusers"],
    }),
    // logoutUser: builder.mutation({
    //   query: (body) => ({
    //     url: "logout",
    //     method: "PUT",
    //     body
    //   }),
    //   invalidatesTags: ["Endusers"],
    // }),
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
  useLogoutUserMutation,
  useLoginUserMutation,
} = usersApiSlice;
