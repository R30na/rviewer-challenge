import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMoviesState } from "../../interfaces";

const initialState: IMoviesState = {
  total: 0,
  entries: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesData: (state, action: PayloadAction<IMoviesState>) => {
      state.total = action.payload.total;
      state.entries = action.payload.entries;
    },
  },
});

export const { setMoviesData } = moviesSlice.actions;

export default moviesSlice.reducer;
