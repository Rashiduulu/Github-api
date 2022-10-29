import { githubApi } from './github/github.api';
import { configureStore } from "@reduxjs/toolkit";
import {getDef}

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi)
})