import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const certificatesApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://9e3d-64-43-50-159.eu.ngrok.io/api",
  }),
  tagTypes: ["Certificates"],
  endpoints: (builder) => ({
    getCertificates: builder.query({
      query: () => `certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificateById: builder.query({
      query: (id) => `certificates/${id}`,
      providesTags: ["Certificates"],
    }),
  }),
});

export const {
  useGetCertificatesQuery,
  useGetCertificateByIdQuery,
} = certificatesApiSlice;
