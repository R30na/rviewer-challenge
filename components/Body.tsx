import React from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Body.module.scss";
import Spinner from "./Spinner";
import { Cards, Pagination, Search } from "./";
import { getFilteredMovies, getMovies } from "../store/selectors";
import { IBodyProps } from "../interfaces";

export const Body = (props: IBodyProps): JSX.Element => {
  const moviesDataFromStore = useSelector(getMovies);
  const moviesFilteredDataFromStore = useSelector(getFilteredMovies);

  return (
    <div className={styles.container}>
      <Search
        onChangeSearchTerm={props.onSetSearchTerm}
        value={props.searchTerm}
      />
      <div className={styles.title}>Popular Movies</div>
      {props.error ? (
        <div className={styles.errorText}>
          Something went wrong please try again!
        </div>
      ) : props.loading || props.searchTerm !== props.searchTermDebounced ? (
        <Spinner />
      ) : (
        <>
          <Cards
            movies={
              props.searchTermDebounced
                ? moviesFilteredDataFromStore.entries
                : moviesDataFromStore.entries
            }
          />
          <Pagination
            totalNumberOfMovies={
              props.searchTermDebounced
                ? moviesFilteredDataFromStore.total
                : moviesDataFromStore.total
            }
            onGoToPage={
              props.searchTermDebounced
                ? props.onFetchMoreFiltered
                : props.onFetchMoreGeneral
            }
          />
        </>
      )}
    </div>
  );
};
