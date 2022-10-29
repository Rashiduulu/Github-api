import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_FAV_KEY = 'react-key'

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
            state.favorites.push(action.payload)
            localStorage.setItem()
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites.remove
        },
  }
}); 