import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import styles from "./Contact.module.scss";
import SocialMedia from "../../components/SocialMedia";

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
