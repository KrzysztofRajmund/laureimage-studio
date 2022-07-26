import React, { useRef } from 'react';
import Image from 'next/image';
import CustomLink from '../CustomLink/CustomLink';
import useScroll from './../../../utils/hooks/useScroll';
import logo from '../../../../public/assets/logo.png';
import cx from 'classnames';
import styles from './AppHeaderDesktop.module.scss';

export const AppHeaderDesktop = () => {
  const navRef = useRef(null);
  const { justScrolled } = useScroll(navRef);


  return (
    <nav className={cx(styles.container, { [styles.scrolledDown]: justScrolled })} ref={navRef}>
      <CustomLink href='/' className={styles.logo}>
        {/* TODO: when logo will be ready replace with image */}
        {/* <Image src={logo} alt='laureimage logo' /> */}
        Laureimage
      </CustomLink>
      <div className={styles.menu}>
        <CustomLink href='/' activeLinkStyle='underline'>
          Home
        </CustomLink>
        <CustomLink href='/portfolio' activeLinkStyle='underline'>
          Portfolio
        </CustomLink>
        <CustomLink href='/onas' activeLinkStyle='underline'>
          O nas
        </CustomLink>
        <CustomLink href='/pakiety' activeLinkStyle='underline'>
          Pakiety
        </CustomLink>
        <CustomLink href='/kontakt' activeLinkStyle='underline'>
          Kontakt
        </CustomLink>
      </div>
    </nav>
  );
};

export default AppHeaderDesktop;
