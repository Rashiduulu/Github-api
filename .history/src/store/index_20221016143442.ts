import { githubApi } from './github/github.api';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi.red]
    }
})