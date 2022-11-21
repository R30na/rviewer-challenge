import type { RootState } from "../";

export const getCurrentPageNum = (state: RootState) => {
  return state.currentPageNumber;
};
