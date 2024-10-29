import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
          reducerPath: "userApi",
          baseQuery: fetchBaseQuery({
                    baseUrl: import.meta.env.VITE_API_BASE_URL,
                    credentials: "include",
          }),
          endpoints: (builder) => ({
                
          }),
})

export const {  } = userApi