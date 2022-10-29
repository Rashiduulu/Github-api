import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface GithubState {
  favorites: string[];
}

const initialState: GithubState = {
  favorites: [],
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
    reducers: {
        addFavorite(state, payload: PayloadAction<string>) {
            
        },
        removeFavorite(state, payload: PayloadAction<string>) {
            
        },
  }
}); 