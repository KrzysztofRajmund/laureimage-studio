import React from "react";
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import styles from "./Layout.module.scss";

export const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};
