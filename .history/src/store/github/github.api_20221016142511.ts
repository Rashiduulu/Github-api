import { createApi } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetch
})