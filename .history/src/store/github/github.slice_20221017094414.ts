import {createSlice} from '@reduxjs/toolkit'

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
        addFavorite(state, payload: PayloadAction<>) {
            
        },
        removeFavorite(state, payload: PayloadAction) {
            
        },
  }
}); 