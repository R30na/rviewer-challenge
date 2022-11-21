import type { RootState } from "../";

export const getFilteredMovies = (state: RootState) => {
  return state.filteredMovies;
};
