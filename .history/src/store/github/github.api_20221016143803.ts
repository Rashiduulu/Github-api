import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https:/api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<any>({
      query: () => ({
        url: `search/users`,
      }),
    }),
  }),
});

export const {useSearchUsersQuery} = githubApi
