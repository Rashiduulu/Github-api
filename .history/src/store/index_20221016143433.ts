import { githubApi } from './github/github.api_24';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi]
    }
})