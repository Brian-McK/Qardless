import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ba71-64-43-50-36.eu.ngrok.io/api",
    tagTypes: ["EndUsers"],
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `enduser`,
      providesTags: ['EndUsers']
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "enduser",
        method: "POST",
        body,
      }),
      invalidatesTags: ['EndUsers']
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = usersApiSlice;
