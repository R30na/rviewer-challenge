export interface IPaginationProps {
  totalNumberOfMovies: number;
  onGoToPage: (pageNum: number) => void;
}
