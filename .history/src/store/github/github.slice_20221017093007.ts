import {createSlice} from '@reduxjs/toolkit'

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: [],
};

export const githubSlice = createSlice() {
    name: 'github',
    initialState,
    red
}