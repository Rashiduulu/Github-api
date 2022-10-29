interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: [],
};

export const githubSlice = crearteSlice
