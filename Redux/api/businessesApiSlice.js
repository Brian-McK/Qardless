import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const businessesApiSlice = createApi({
  reducerPath: "businessesApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cd2a-80-233-52-204.eu.ngrok.io/",
  }),
  tagTypes: ["Businesses"],
  endpoints: (builder) => ({
    getBusinesses: builder.query({
      query: () => `businesses`,
      providesTags: ["Businesses"],
    }),
    getBusinessById: builder.query({
      query: (id) => `businesses/${id}/`,
      providesTags: ["Businesses"],
    }),
  }),
});

export const { useGetBusinessesQuery, useGetBusinessByIdQuery } =
  businessesApiSlice;
