import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const csrfApi = createApi({
          reducerPath: 'csrfApi',
          baseQuery: fetchBaseQuery({
                    baseUrl: import.meta.env.VITE_API_BASE_URL,
                    credentials: "include",
          }),
          endpoints: (builder) => ({
                    getCSRFProtection: builder.query<void, void>({
                              query: () => '/sanctum/csrf-cookie'
                    }),
          })
})

export const { useGetCSRFProtectionQuery, useLazyGetCSRFProtectionQuery } = csrfApi