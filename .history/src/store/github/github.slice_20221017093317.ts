import {createSlice} from '@reduxjs/toolkit'

interface GithubState {
  favorites: string[];
}

const initialState: GithubState = {
  favourites: [],
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
    reducers: {
      addFavourite(state)
  }
}); 