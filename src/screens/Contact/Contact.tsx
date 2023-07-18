import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import { SectionDescription } from "../../components/SectionDescription";
import headerImage from "../../../public/assets/contact-screen-header-image.jpg";
import contentImage from "../../../public/assets/contact-screen-content-image.jpg";
import styles from "./Contact.module.scss";
import SocialMedia from "../../components/SocialMedia";

const Contact = () => {
  const contactDescription =
    "Nasza wspólna podróż zaczyna się tutaj. Opowiedz mi więcej o sobie i planowanym ślubie! Po prostu napisz do mnie za pomocą email'a, a ja skontaktuję się z Tobą w przeciągu około 48 godzin.";

  const contact = {
    title: "Powiedz Cześć!",
    desc: contactDescription,
    img: contentImage,
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
  return (
    <>
      <SectionHeaderImage
        image={headerImage}
        //TODO: Adds company logo
        // logo={
        //   <div style={{ color: "white", fontSize: "3rem" }}>Laure Logo</div>
        // }
        containerHeight="65vh"
      />
      <Layout>{page}</Layout>
    </>
  );
};
export default Contact;
