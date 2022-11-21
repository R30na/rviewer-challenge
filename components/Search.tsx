import React, { ChangeEvent } from "react";
import Image from "next/image";

import searchIcon from "../assets/search.svg";
import styles from "../styles/Search.module.scss";
import { ISearchProps } from "../interfaces";

export const Search = (props: ISearchProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChangeSearchTerm(event.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searachInput}
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={props.value}
      />
      <Image className={styles.searchIcon} src={searchIcon} alt="search" />
    </div>
  );
};
