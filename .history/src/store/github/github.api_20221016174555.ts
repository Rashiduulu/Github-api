import { ServerResponse, IUser } from '../../models/models';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https:/api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
            url: `search/users`,
            params: {
                q: search,
                per_page: 10
          } 
        }),
        transformResponse: (response: ServerResponse<IUser>) => response.items
    }),
      getUserRepos: build.query<any, void>({
          query: () => ({
              url: 
          })
      })
  }),
});

export const {useSearchUsersQuery} = githubApi
