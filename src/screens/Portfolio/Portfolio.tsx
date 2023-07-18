import { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import { ImagesListVertical } from "../../components/ImagesListVertical";
import dataImages from '../../dataImages.json'
import headerImage from "../../../public/static/assets/portfolio-screen-header-image.jpg";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const contactDescription =
    "Historie wspaniałych, szczęśliwych ludzi, których miałem przyjemność fotografować. Zapraszam Was do zapoznania się z moim portfolio i spędzenia kilku chwil z wyjątkowymi parami.";

  const portfolioContent = {
    title: "Wasze Historie",
    desc: contactDescription,
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <SectionDescription description={portfolioContent.desc} title={portfolioContent.title} />
      </div>
      <ImagesListVertical images={dataImages.images} />
    </div>
  );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SectionHeaderImage image={headerImage} containerHeight="65vh" />
      <Layout>{page}</Layout>
    </>
  );
};
export default Portfolio;
