import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ba71-64-43-50-36.eu.ngrok.io/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `enduser`,
    }),
  }),
});

export const {
    useGetUsersQuery
} = apiSlice;
