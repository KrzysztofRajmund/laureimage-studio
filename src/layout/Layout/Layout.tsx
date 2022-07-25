import React from "react";
import AppHeader from "../../components/AppHeader";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <AppHeader />
      {children}
      <h1>I am footer</h1>
    </div>
  );
};
