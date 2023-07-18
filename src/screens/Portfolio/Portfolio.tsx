import { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import headerImage from "../../../public/assets/contact-screen-header-image.jpg";
import contentImage from "../../../public/assets/contact-screen-content-image.jpg";
import { ImagesListVertical } from "../../components/ImagesListVertical";
import dataImages from '../../dataImages.json'
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const contactDescription =
    "Historie wspaniałych, szczęśliwych ludzi, których miałem przyjemność fotografować. Zapraszam Was do zapoznania się z moim portfolio i spędzenia kilku chwil z wyjątkowymi parami.";

  const contact = {
    title: "Wasze Historie",
    desc: contactDescription,
    img: contentImage,
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <SectionDescription description={contact.desc} title={contact.title} />
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
