import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import styles from "./Contact.module.scss";
import SocialMedia from "../../components/SocialMedia";
import { Meta } from "../../meta";

const Contact = () => {
  const contactDescription =
    "Nasza wspólna podróż zaczyna się tutaj. Opowiedz mi więcej o sobie i planowanym ślubie! Po prostu napisz do mnie za pomocą email'a, a ja skontaktuję się z Tobą w przeciągu około 48 godzin.";

  const contact = {
    title: "Powiedz Cześć!",
    desc: contactDescription,
    img: "contact-screen-content-image.jpg",
  };

  return (
    <div className={styles.container}>
      <SectionDescription
        description={contact.desc}
        title={contact.title}
        image={contact.img}
      />
      <div className={styles.socialmedia}>
        <SocialMedia />
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  //TODO: Adds function to handle large screen view height for header images in almost all screens
  // const imageUrl = isLargeScreen() ? "contact-screen-header-image.jpg" : "contact-screen-header-image-mobile.jpg"
  // const sectionHeight = isLargeScreen() ? "85vh" : "55vh"

  return (
    <>
      <Meta
        webUrl="https://laureimage.com/kontakt"
        keywords="Fotografia slubna, plener slubny, kontakt fotografia slubna szczecin"
        type="text"
        title="Laureimage kontakt - fotograf ślubny"
        description="Powiedz Cześć, kontakt Laureimage"
        imageUrl="https://laureimage.com/_ipx/w_1920,q_75/%2Fstatic%2Fassets%2Fcontact-screen-header-image.jpg?url=%2Fstatic%2Fassets%2Fcontact-screen-header-image.jpg&w=1920&q=75"
        imageAlt="Laureimage kontakt"
      />
      <SectionHeaderImage
        image="contact-screen-header-image.jpg"
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
export default Contact;
