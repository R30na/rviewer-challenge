import { configureStore } from "@reduxjs/toolkit";
import {
  filteredMoviesReducer,
  moviesReducer,
  currentPageNumReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filteredMovies: filteredMoviesReducer,
    currentPageNumber: currentPageNumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
