import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import styles from "../styles/Pagination.module.scss";
import leftArrow from "../assets/left-chevron.svg";
import rightArrow from "../assets/right-chevron.svg";
import { pageLimit } from "../constants";
import { IPaginationProps } from "../interfaces/IPaginationProps";
import { getCurrentPageNum } from "../store/selectors/getCurrentPageNum";

export const Pagination = (props: IPaginationProps): JSX.Element => {
  const currentPageNumber = useSelector(getCurrentPageNum);
  const totalNumberOfPages = Math.ceil(props.totalNumberOfMovies / pageLimit);

  const handleGoPrevPage = (): void => {
    if (currentPageNumber > 1) {
      props.onGoToPage(currentPageNumber - 2);
    }
  };

  const handleGoNextPage = (): void => {
    if (currentPageNumber < totalNumberOfPages) {
      props.onGoToPage(currentPageNumber);
    }
  };

  if (!props.totalNumberOfMovies) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={leftArrow}
        alt="left arrow"
        className={styles.arrowButton}
        onClick={handleGoPrevPage}
      />
      {[...Array(totalNumberOfPages)].map((_, i) => (
        <div
          className={
            currentPageNumber === i + 1
              ? styles.pageButtonActive
              : styles.pageButton
          }
          key={i}
          onClick={() => props.onGoToPage(i)}
        >
          {i + 1}
        </div>
      ))}
      <Image
        src={rightArrow}
        alt="right arrow"
        className={styles.arrowButton}
        onClick={handleGoNextPage}
      />
    </div>
  );
};
