import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const businessesApiSlice = createApi({
  reducerPath: "businessesApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2aba-80-233-61-67.ngrok-free.app/",
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
