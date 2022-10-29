import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryArgs } from "@testing-library/react";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https:/api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<any, string>({
      query: (search: QueryArg) => ({
        url: `search/users`,
      }),
    }),
  }),
});

export const {useSearchUsersQuery} = githubApi
