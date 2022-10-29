import { githubApi } from './github/github.api';
import { configureStore, getD } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefa
})