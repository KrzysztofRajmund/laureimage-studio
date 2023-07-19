import { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import { ImagesListVertical } from "../../components/ImagesListVertical";
import dataImages from '../../dataImages.json'
import styles from "./Portfolio.module.scss";
import { Meta } from "../../meta";

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
      <Meta
        webUrl="https://laureimage.com/portfolio"
        keywords="Reportaż ślubny, plener slubny, fotografia slubna szczecin, reportaz slubny, fotograf portfolio"
        type="text"
        title="Laureimage fotograf ślubny portfolio"
        description="Wasze historie, reportaz slubny"
        imageUrl="https://laureimage.com/_ipx/w_1920,q_75/%2Fstatic%2Fassets%2Fportfolio-screen-header-image.jpg?url=%2Fstatic%2Fassets%2Fportfolio-screen-header-image.jpg&w=1920&q=75"
        imageAlt="Laureimage portfolio"
      />
      <SectionHeaderImage image="portfolio-screen-header-image.jpg" containerHeight="65vh" />
      <Layout>{page}</Layout>
    </>
  );
};
export default Portfolio;
