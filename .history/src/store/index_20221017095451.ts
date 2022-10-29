import { github } from './../../.history/src/store/github/github.slice_20221017092839';
import { githubApi } from './github/github.api';
import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)