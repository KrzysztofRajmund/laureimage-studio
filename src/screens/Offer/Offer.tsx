import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import headerImage from "../../../public/assets/offer-screen-header-image.jpg";
import contentImage from "../../../public/assets/offer-screen-content-image.jpg";
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
      img: contentImage,
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
      img: contentImage,
      list: [
        "min. 70 wyedytowanych i wyretuszowanych zdjęć",
        "online gallery",
      ],
    },
    {
      title: "Album: 400-600 zł",
      desc: "Deluxe album z wybranymi zdjęciami",
      img: contentImage,
    },
    {
      title: "Sesja zaręczynowa: 500 zł",
      desc: "Portrety oraz urozmaicone kadry ułożone w historie",
      img: contentImage,
    },
  ];

  const renderOffers = () =>
    offers.map((offer, index) => {
      const isEven = index % 2 === 1;
      const shouldBeReversed = isDesktopScreen && offer.img && isEven

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
        image={headerImage}
        logo={
          <div style={{ color: "white", fontSize: "3rem" }}>Laure Logo</div>
        }
        containerHeight={350}
      />
      <Layout>{page}</Layout>
    </>
  );
};
export default Offer;
