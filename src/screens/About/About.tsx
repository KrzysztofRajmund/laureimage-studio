import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionImageWithContent from "../../components/SectionImageWithContent";
import styles from "./About.module.scss";
import CustomLink from "../../components/CustomLink";
import { Meta } from "../../meta";

const About = () => {
  const title = "Moje fotografie";
  const contentImageDesc = {
    desc: "Portret 2021",
    actionButton: <CustomLink href="kontakt">Kontakt &gt;</CustomLink>,
  };

  return (
    <>
      <Meta
        webUrl="https://laureimage.com/onas"
        keywords="Fotograf slubny, fotograf slubny szczecin"
        type="text"
        title="Laureimage o nas - fotograf slubny"
        description="O Laureimage, o nas, fotograf szczecin"
        imageUrl="https://laureimage.com/_ipx/w_1920,q_75/%2Fstatic%2Fassets%2Fabout-screen-content-image.jpg?url=%2Fstatic%2Fassets%2Fabout-screen-content-image.jpg&w=1920&q=75"
        imageAlt="Laureimage o nas"
      />
      <div className={styles.container}>
        <SectionImageWithContent
          title={title}
          image="about-screen-content-image.jpg"
          subtitle="Emotive story telling"
          imageDesc={contentImageDesc}
        />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          Na zdjęciach staram się zawsze zatrzymać dla Państwa chwile i emocje z
          nimi związane. Jestem tam dla Was tworząc zdjęcia ułożone w historie .
          Staram się uchwycić ludzi takimi, jacy są. Nie poproszę Was o uśmiech,
          jestem fanem emocji, ale tych autentycznych, więc wolę poczekać, aż
          uśmiech przyjdzie sam. Pracując jako fotograf ślubny zawsze dokładam
          wszelkich starań, aby zdjęcia były ciekawe i niebanalne, zachowując
          przy edycji naturalne piękne kolory. Jeśli spodobały się Państwu
          zdjęcia z mojej strony zapraszam do kontaktu w celu poznania pełnej
          oferty.
        </p>
      </div>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default About;
