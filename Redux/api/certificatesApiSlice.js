import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const certificatesApiSlice = createApi({
  reducerPath: "certificatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2aba-80-233-61-67.ngrok-free.app/",
  }),
  tagTypes: ["Certificates"],
  endpoints: (builder) => ({
    getCertificates: builder.query({
      query: () => `Certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificatesByUserId: builder.query({
      query: (id) => `endUsers/${id}/certificates`,
      providesTags: ["Certificates"],
    }),
    getCertificateById: builder.query({
      query: (id) => `certificates/${id}`,
      providesTags: ["Certificates"],
    }),
    reportCertificateIssue: builder.mutation({
      query: (body) => ({
        url: "flaggedissues",
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
