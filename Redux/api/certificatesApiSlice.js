import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const certificatesApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qardlessapi.azurewebsites.net/api/",
  }),
  tagTypes: ["Certificates"],
  endpoints: (builder) => ({
    getCertificates: builder.query({
      query: () => `Certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificateById: builder.query({
      query: (id) => `Certificates/${id}`,
      providesTags: ["Certificates"],
    }),
    reportCertificateIssue: builder.mutation({
      query: (body) => ({
        url: "Changelogs",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {
  useGetCertificatesQuery,
  useGetCertificateByIdQuery,
  useReportCertificateIssueMutation,
} = certificatesApiSlice;
