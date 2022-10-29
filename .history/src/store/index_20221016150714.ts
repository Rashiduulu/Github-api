import { githubApi } from './github/github.api';
import { configureStore, get } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefa
})