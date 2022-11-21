import React from "react";

import { IMovieProps } from "../interfaces";
import styles from "../styles/Movie.module.scss";

export const Movie = (props: IMovieProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.title}>{props.movieData.title}</div>
        <div className={styles.year}>{props.movieData.releaseYear}</div>
        <div className={styles.description}>{props.movieData.description}</div>
      </div>
      <picture>
        <img
          src={props.movieData.images.posterArt.url}
          alt="movie image"
          className={styles.image}
        />
      </picture>
    </div>
  );
};
