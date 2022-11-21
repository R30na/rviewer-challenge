import React from "react";
import { ICardsProps } from "../interfaces";

import styles from "../styles/Cards.module.scss";
import { Movie } from "./";

export const Cards = (props: ICardsProps): JSX.Element => {
  const sortedMovies = props.movies
    .slice()
    .sort((a, b) => b.releaseYear - a.releaseYear);

  return (
    <>
      {props.movies?.length > 0 ? (
        <div className={styles.container}>
          {sortedMovies.map((item) => (
            <Movie key={item.title} movieData={item} />
          ))}
        </div>
      ) : (
        <div className={styles.noResult}>No results!</div>
      )}
    </>
  );
};
