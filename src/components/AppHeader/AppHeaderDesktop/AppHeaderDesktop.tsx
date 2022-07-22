import React from 'react';
import Image from 'next/image';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../../public/assets/logo.png';
import styles from './AppHeaderDesktop.module.scss';

export const AppHeaderDesktop = () => {
  return (
    <nav className={styles.container}>
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
