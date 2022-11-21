import type { RootState } from "../";

export const getMovies = (state: RootState) => {
  return state.movies;
};
