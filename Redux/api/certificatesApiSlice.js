import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const certificatesApiSlice = createApi({
  reducerPath: "certificatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://7427-80-233-61-249.eu.ngrok.io/",
  }),
  tagTypes: ["Certificates"],
  endpoints: (builder) => ({
    getCertificates: builder.query({
      query: () => `Certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificatesByUserId: builder.query({
      query: (id) => `EndUsers/${id}/Certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificateById: builder.query({
      query: (id) => `Certificates/${id}`,
      providesTags: ["Certificates"],
    }),
    reportCertificateIssue: builder.mutation({
      query: (body) => ({
        url: "changelogs",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {
  useGetCertificatesQuery,
  useGetCertificatesByUserIdQuery,
  useGetCertificateByIdQuery,
  useReportCertificateIssueMutation,
} = certificatesApiSlice;
