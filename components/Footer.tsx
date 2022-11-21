import React from "react";
import Image from "next/image";

import logo from "../assets/logo.svg";
import appStore from "../assets/appstore.svg";
import googlePlay from "../assets/googleplay.svg";
import styles from "../styles/Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <div className={styles.appDownloads}>
        <Image src={appStore} alt="app store" />
        <Image src={googlePlay} alt="google play" />
      </div>
      <div className={styles.copyright}>
        © Copyright 2022 Dreadful Tomatoes. All rights reserved.
      </div>
    </div>
  );
};
