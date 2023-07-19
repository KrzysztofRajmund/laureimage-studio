import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import styles from "./Offer.module.scss";
import { useResponsive } from "../../utils/hooks";

const Offer = () => {
  const {isDesktopScreen} = useResponsive();

  const offerDescription =
    "Na zdjęciach staram się zawsze zatrzymać dla Państwa chwile i emocje z nimi związane. Jestem tam dla Was tworząc zdjęcia ułożone w historie. Staram się uchwycić ludzi takimi, jacy są. Nie poproszę Was o uśmiech, jestem fanem emocji, ale tych autentycznych, więc wolę poczekać, aż uśmiech przyjdzie sam. Pracując jako fotograf ślubny zawsze dokładam wszelkich starań, aby zdjęcia były ciekawe i niebanalne, zachowując przy edycji naturalne piękne kolory. Jeśli spodobały się Państwu zdjęcia z mojej strony zapraszam do kontaktu w celu poznania pełnej oferty.";

  const offers = [
    {
      title: "Reportaż Ślubny: 2900 zł",
      desc: offerDescription,
      img: "offer-screen-content-image-1.jpg",
      list: [
        "fotograf od przygotowań do oczepin (ok. 1 rano)",
        "galeria online",
        "około 500 wyedytowanych zdjęć",
        "ślubne grawerowane USB",
        "wydruki",
        "zdjęcia grupowe / rodzinne",
        "portrety Państwa Młodych w dniu ślubu",
      ],
    },
    {
      title: "Plener Ślubny: 900 zł",
      desc: "Portrety Pary Młodej ułożone w historie z dnia pleneru",
      img: "offer-screen-content-image-2-1.jpg",
      list: [
        "min. 70 wyedytowanych i wyretuszowanych zdjęć",
        "online gallery",
      ],
    },
    {
      title: "Sesja zaręczynowa: 500 zł",
      desc: "Portrety oraz urozmaicone kadry ułożone w historie",
      img: "offer-screen-content-image-3.jpg",
    },
    {
      title: "Album: 400-600 zł",
      desc: "Deluxe album z wybranymi zdjęciami",
      img: "offer-screen-content-image-4.jpg",
    },
  ];

  const renderOffers = () =>
    offers.map((offer, index) => {
      const isEven = index % 2 === 1;
      const shouldBeReversed = isDesktopScreen && !!offer.img && isEven

      return (
        <SectionDescription
          key={offer.desc}
          description={offer.desc}
          title={offer.title}
          image={offer.img}
          list={offer.list}
          reversedContent={shouldBeReversed}
        />
      );
    });

  return <div className={styles.container}>{renderOffers()}</div>;
};

Offer.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SectionHeaderImage
        image="offer-screen-header-image-2.jpg"
        //TODO: Adds company logo
        // logo={
        //   <div style={{ color: "white", fontSize: "3rem" }}>Laure Logo</div>
        // }
        containerHeight="75vh" 
      />
      <Layout>{page}</Layout>
    </>
  );
};
export default Offer;
