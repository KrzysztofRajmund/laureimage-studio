import ImageGridLayout from "../../components/ImageGridLayout/ImageGridLayout";
import styles from "./HomeScreen.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <ImageGridLayout />
    </div>
  );
};
export default HomeScreen;
