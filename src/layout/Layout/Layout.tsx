import React from "react";
import AppHeader from "../../components/AppHeader";
import styles from "./Layout.module.scss";
import AppHeaderTabletMobile from './../../components/AppHeader/AppHeaderTabletMobile/AppHeaderTabletMobile';

export const Layout = ({ children }: any) => {
  return (
    <div className={styles.tabletMobile}>
      <AppHeaderTabletMobile />
      <div className={styles.desktop}>
        {children}
        <h1>I am footer</h1>
      </div>
    </div>
  );
};
