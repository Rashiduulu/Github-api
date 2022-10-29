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
        addFavorite(state, action: PayloadAction<string>) {
            state.favorites.push(action)
        },
        removeFavorite(state, action: PayloadAction<string>) {
            
        },
  }
}); 