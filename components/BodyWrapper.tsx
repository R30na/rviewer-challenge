import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";

import { FILTER_MOVIES, GET_MOVIES } from "../apollo/queries";
import { pageLimit } from "../constants";
import { setMoviesData } from "../store/slices/moviesSlice";
import { setFilteredMoviesData } from "../store/slices/filteredMoviesSlice";
import { setPageNumber } from "../store/slices/currentPageNumSlice";
import { Body } from "./";

export const BodyWrapper = (): JSX.Element => {
  /**
   * States
   */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermDebounced] = useDebounce(searchTerm, 1000);

  /**
   * Hooks
   */
  const dispatch = useDispatch();
  const {
    loading: loadingGeneral,
    error: errorGeneral,
    data: dataGeneral,
    fetchMore: fetchMoreGeneral,
  } = useQuery(GET_MOVIES, {
    variables: {
      offset: 0,
      limit: pageLimit,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [
    getFiltered,
    {
      loading: loadingFilter,
      error: errorFilter,
      data: dataFilter,
      fetchMore: fetchMoreFilter,
    },
  ] = useLazyQuery(FILTER_MOVIES, { notifyOnNetworkStatusChange: true });

  /**
   * Effects
   */

  useEffect(() => {
    if (dataGeneral) {
      dispatch(setMoviesData(dataGeneral.getMovies));
    }
  }, [dataGeneral, dispatch]);

  useEffect(() => {
    if (dataFilter) {
      dispatch(setFilteredMoviesData(dataFilter.filterMovies));
    }
  }, [dataFilter, dispatch]);

  useEffect(() => {
    if (searchTermDebounced) {
      getFiltered({
        variables: {
          offset: 0,
          limit: 10,
          term: searchTermDebounced,
        },
      });
    } else {
      dispatch(setFilteredMoviesData({ total: 0, entries: [] }));
    }
  }, [dispatch, getFiltered, searchTermDebounced]);

  /**
   * Hanlers
   */

  const handleSetSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  const handleFetchMoreGeneral = (pageNum: number): void => {
    dispatch(setPageNumber(pageNum + 1));
    fetchMoreGeneral({
      variables: {
        offset: pageNum * pageLimit,
        limit: pageLimit,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          ...prevResult,
          ...fetchMoreResult,
        };
      },
    });
  };

  const handleFetchMoreFiltered = (pageNum: number): void => {
    dispatch(setPageNumber(pageNum + 1));
    fetchMoreFilter({
      variables: {
        offset: pageNum * pageLimit,
        limit: pageLimit,
        term: searchTerm,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          ...prevResult,
          ...fetchMoreResult,
        };
      },
    });
  };

  return (
    <Body
      loading={loadingGeneral || loadingFilter}
      error={errorGeneral || errorFilter}
      searchTerm={searchTerm}
      searchTermDebounced={searchTermDebounced}
      onFilter={getFiltered}
      onSetSearchTerm={handleSetSearchTerm}
      onFetchMoreGeneral={handleFetchMoreGeneral}
      onFetchMoreFiltered={handleFetchMoreFiltered}
    />
  );
};
