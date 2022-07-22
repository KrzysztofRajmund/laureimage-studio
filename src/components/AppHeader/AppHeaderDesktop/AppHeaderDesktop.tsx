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
        <Image src={logo} alt='laureimage logo' />
      </CustomLink>
      <div className={styles.menu}>
        <CustomLink href='/' activeStyle='underline'>
          Home
        </CustomLink>
        <CustomLink href='/portfolio' activeStyle='underline'>
          Portfolio
        </CustomLink>
        <CustomLink href='/onas' activeStyle='underline'>
          O nas
        </CustomLink>
        <CustomLink href='/pakiety' activeStyle='underline'>
          Pakiety
        </CustomLink>
        <CustomLink href='/kontakt' activeStyle='underline'>
          Kontakt
        </CustomLink>
      </div>
    </nav>
  );
};

export default AppHeaderDesktop;
