import { githubApi } from './../../.history/src/store/github/github.api_20221016141714';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.const initialState = {
        
        }
        
        export default (state = initialState, { type, payload }) => {
          switch (type) {
        
          case typeName:
            return { ...state, ...payload }
        
          default:
            return state
          }
        }
        
    }
})