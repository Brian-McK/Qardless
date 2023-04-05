import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const qrApiSlice = createApi({
  reducerPath: "qrApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qardlessqrcode.azurewebsites.net/",
  }),
  endpoints: (builder) => ({
    getQrImageByUrl: builder.query({
      query: (url) => `generate_qrcode?pdf_url=${url}`,
    }),
  }),
});

export const { useGetQrImageByUrlQuery } =
qrApiSlice;
