import { createModuleResolutionCache } from "typescript";

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: [],
};

export const githubSlice = createModuleResolutionCache
