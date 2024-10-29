import { Login, User } from "@/models/user.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
          reducerPath: 'authApi',
          baseQuery: fetchBaseQuery({
                    baseUrl: import.meta.env.VITE_API_BASE_URL + '/api',
                    credentials: "include",
                    prepareHeaders: (headers) => {
                              headers.set('Accept', 'application/json')
                              headers.set('Content-Type', 'application/json')
                              headers.set('Origin', 'https://localhost:5173')
                              return headers
                    }
          }),
          endpoints: (builder) => ({
                    getUser: builder.query<User, void>({
                              query: () => '/user',
                    }),
                    login: builder.mutation<User, Login>({
                              query: (credentials) => ({
                                        url: '/login',
                                        method: 'POST',
                                        body: credentials
                              }),
                    }),
                    logout: builder.mutation<void, void>({
                              query: () => ({
                                        url: '/logout',
                                        method: 'POST',
                              }),
                    })

          })
})

export const { useLoginMutation, useGetUserQuery, useLogoutMutation } = authApi