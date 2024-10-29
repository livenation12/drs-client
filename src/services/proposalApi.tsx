import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Proposal } from "@/models/proposal.model";

export const proposalsApi = createApi({
          reducerPath: "proposalsApi",
          baseQuery: fetchBaseQuery({
                    baseUrl: import.meta.env.VITE_API_BASE_URL + "/proposals",
                    credentials: "include",
          }),
          endpoints: (builder) => ({
                    proposal: builder.query<Proposal[], void>({
                              query: () => "/"
                    }),
                    proposals: builder.query<Proposal, number>({
                              query: (id) => `/${id}`
                    }),
                    addProposal: builder.mutation<void, FormData>({
                              query: (proposal) => ({
                                        url: "/",
                                        method: "POST",
                                        body: proposal
                              })
                    }),
                    updateProposal: builder.mutation<void, Proposal>({
                              query: ({ id, ...rest }) => ({
                                        url: `/${id}`,
                                        method: "PUT",
                                        body: rest
                              })
                    }),
                    deleteProposal: builder.mutation<void, Proposal>({
                              query: (id) => ({
                                        url: `/${id}`,
                                        method: "DELETE",
                              })
                    })
          })
})

export const { useProposalsQuery,
          useProposalQuery,
          useAddProposalMutation,
          useUpdateProposalMutation,
          useDeleteProposalMutation
} = proposalsApi