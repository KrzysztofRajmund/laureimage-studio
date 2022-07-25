import ImageFlexLayout from "../../components/ImageFlexLayout/ImageFlexLayout";
import styles from "./HomeScreen.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <ImageFlexLayout />
    </div>
  );
};
export default HomeScreen;
