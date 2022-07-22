import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../../public/assets/logo.png';
import cx from 'classnames';
import styles from './AppHeaderDesktop.module.scss';

export const AppHeaderDesktop = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        const { clientTop, clientHeight, scrollTop, scrollHeight } = navRef.current;
        // console.log("scroll:", clientTop, clientHeight, scrollTop, scrollHeight, window.scrollY)
        if (window.scrollY > (clientHeight || scrollHeight)) setScrolled(true);
        if (window.scrollY < (clientHeight || scrollHeight)) setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={cx(styles.container, { [styles.scrolledDown]: scrolled })} ref={navRef}>
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
