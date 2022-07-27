import React, { useRef } from 'react';
import Image from 'next/image';
import CustomLink from '../../CustomLink';
import { useInView } from '../../../utils/hooks';
import logo from '../../../../public/assets/logo.png';
import cx from 'classnames';
import styles from './AppHeaderDesktop.module.scss';

export const AppHeaderDesktop = () => {
  const navRef = useRef(null);
  const { justScrolledBy } = useInView(navRef, 0);


  return (
    <nav className={cx(styles.container, { [styles.scrolledDown]: justScrolledBy })} ref={navRef}>
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
