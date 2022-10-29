import { githubApi } from './github/github.api_20221016141714';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi]
    }
})