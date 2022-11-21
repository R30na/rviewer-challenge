import { ApolloError } from "@apollo/client";

export interface IBodyProps {
  loading: boolean;
  error: ApolloError | undefined;
  searchTerm: string;
  searchTermDebounced: string;
  onSetSearchTerm: (term: string) => void;
  onFilter: () => void;
  onFetchMoreGeneral: (pageNum: number) => void;
  onFetchMoreFiltered: (pageNum: number) => void;
}
