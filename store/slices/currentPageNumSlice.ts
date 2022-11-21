import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = 1;

export const pageNumSlice = createSlice({
  name: "currentPageNumber",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setPageNumber } = pageNumSlice.actions;

export default pageNumSlice.reducer;
