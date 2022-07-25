import { useState } from 'react';
import Burger from '../Burger/Burger';
import CustomLink from '../CustomLink/CustomLink';
import cx from 'classnames';
import styles from "./AppHeaderTabletMobile.module.scss";

const AppHeaderTabletMobile = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  }

  const toggleModal = () => {
    setShow(!show);
  }

  return (
    <>
      <Burger onClick={toggleModal} show={show} />
      <header className={styles.header}>
        <h1 className={styles.title}>Fotografia Ślubna</h1>
        <CustomLink href='/' className={styles.logo}>
          LaureImage
        </CustomLink>
      </header>
      <nav className={cx(styles.menu, { [styles.show]: show })} onClick={closeModal}>
        <CustomLink href='/'>
          Home
        </CustomLink>
        <CustomLink href='/portfolio'>
          Portfolio
        </CustomLink>
        <CustomLink href='/onas'>
          O nas
        </CustomLink>
        <CustomLink href='/pakiety'>
          Pakiety
        </CustomLink>
        <CustomLink href='/kontakt'>
          Kontakt
        </CustomLink>
      </nav>
    </>
  )
};

export default AppHeaderTabletMobile;
