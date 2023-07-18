import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import headerImage from "../../../public/assets/contact-screen-header-image.jpg";
import contentImage from "../../../public/assets/contact-screen-content-image.jpg";
import styles from "./Portfolio.module.scss";
import { ImagesListVertical } from "../../components/ImagesListVertical";

const Portfolio = () => {
  //Note: Temporary placement for data:
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(
        "https://k2nstudio-api.herokuapp.com/items/"
      );
      setImages(response.data);
    };
    getImages();
  }, []);

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
      <ImagesListVertical images={images} />
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
