import { useState } from 'react';
import Image from 'next/image';
import Burger from '../Burger/Burger';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../../public/assets/logo.png';
import styles from "./AppHeaderTabletMobile.module.scss";

const AppHeaderTabletMobile = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  }

  const toggleModal = () => {
    setShow(!show);
  }

  return (
    <>
      <nav className={styles.header}>
        <Burger onClick={toggleModal} show={show} />
        <div className={styles.content}>
          <h1>Fotografia Ślubna</h1>
          <CustomLink href='/' className={styles.logo}>
            LaureImage
          </CustomLink>
        </div>
      </nav>
      {show && <nav className={styles.modal}>
        <CustomLink href='/' className={styles.logo}>
          <Image src={logo} alt='laureimage logo' />
        </CustomLink>
        <div className={styles.menu}>
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
        </div>
      </nav>}
    </>
  )
};

export default AppHeaderTabletMobile;
