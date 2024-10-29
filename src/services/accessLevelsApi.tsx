import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccesLevel } from "../models/accesLevel.model";

export const accessLevelsApi = createApi({
          reducerPath: "accessLevelsApi",
          baseQuery: fetchBaseQuery({
                    baseUrl: import.meta.env.VITE_API_BASE_URL,
                    credentials: "include",
          }),
          endpoints: (builder) => ({
                    accessLevels: builder.query<AccesLevel[], void>({
                              query: () => "/access_levels"
                    }),
                    accessLevel: builder.query<AccesLevel, number>({
                              query: (id) => `/access_levels/${id}`
                    }),
                    addAccessLevel: builder.mutation<void, AccesLevel>({
                              query: (accessLevel) => ({
                                        url: `/access_levels/${accessLevel.id}`,
                                        method: "POST",
                                        body: accessLevel
                              })
                    }),
                    updateAccessLevel: builder.mutation<void, AccesLevel>({
                              query: ({ id, ...rest }) => ({
                                        url: `/access_levels/${id}`,
                                        method: "PUT",
                                        body: rest
                              })
                    }),
                    deleteAccessLevel: builder.mutation<void, AccesLevel>({
                              query: (id) => ({
                                        url: `/access_levels/${id}`,
                                        method: "DELETE",
                              })
                    })
          })
})

export const { useAccessLevelsQuery,
          useAccessLevelQuery,
          useAddAccessLevelMutation,
          useUpdateAccessLevelMutation,
          useDeleteAccessLevelMutation
} = accessLevelsApi