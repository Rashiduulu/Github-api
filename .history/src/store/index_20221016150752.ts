import { githubApi, getDefaultMiddleware } from './github/github.api';
import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMiddleware
})