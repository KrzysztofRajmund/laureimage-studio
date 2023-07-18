import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.facebook.com/laureimage.weddings/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.instagram.com/laureimage/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a href="mailto:infolaureimage@gmail.com?&subject=LaureImage&body=How can I help?">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="tel:+48-530-003-833">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  );
};

export default SocialMedia;
