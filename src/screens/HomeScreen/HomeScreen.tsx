import type { NextPage } from "next";
import styles from "./HomeScreen.module.scss";

export const HomeScreen: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  );
};
