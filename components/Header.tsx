import React from "react";
import Image from "next/image";

import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};
