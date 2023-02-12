import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const businessesApiSlice = createApi({
  reducerPath: "businessesApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qardlessapi.azurewebsites.net/api/",
  }),
  tagTypes: ["Businesses"],
  endpoints: (builder) => ({
    getBusinesses: builder.query({
      query: () => `Businesses`,
      providesTags: ["Businesses"],
    }),
    getBusinessById: builder.query({
      query: (id) => `Businesses/${id}/`,
      providesTags: ["Businesses"],
    }),
  }),
});

export const { useGetBusinessesQuery, useGetBusinessByIdQuery } =
  businessesApiSlice;
