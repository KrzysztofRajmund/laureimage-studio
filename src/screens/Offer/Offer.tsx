import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import headerImage from '../../../public/assets/homescreen-header-image.jpg';
import SectionHeaderImage from "../../components/SectionHeaderImage";
import styles from "./Offer.module.scss";

const Offer = () => {

  return (
    <div className={styles.container}>
      
      <h2 className={styles.title}>Tytul dla oferty</h2>
      <p className={styles.description}>
        Na zdjęciach staram się zawsze zatrzymać dla Państwa chwile i emocje z
        nimi związane. Jestem tam dla Was tworząc zdjęcia ułożone w historie .
        Staram się uchwycić ludzi takimi, jacy są. Nie poproszę Was o uśmiech,
        jestem fanem emocji, ale tych autentycznych, więc wolę poczekać, aż
        uśmiech przyjdzie sam. Pracując jako fotograf ślubny zawsze dokładam
        wszelkich starań, aby zdjęcia były ciekawe i niebanalne, zachowując przy
        edycji naturalne piękne kolory. Jeśli spodobały się Państwu zdjęcia z
        mojej strony zapraszam do kontaktu w celu poznania pełnej oferty.
      </p>
    </div>
  );
};

Offer.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SectionHeaderImage
        image={headerImage}
        logo={<div>LOGO</div>}
        containerHeight={350}
      />
      <Layout>{page}</Layout>
    </>
  );
};
export default Offer;
