import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../AppContext';
import navbarText from '../../texts/navbarText';
import NavbarButton from './NavbarButton';
import gsap from 'gsap';
import styles from '../../styles/Navbar.module.css';

export default function Menu() {
  const { lang } = useContext(AppContext);
  let el = useRef();

  useEffect(() => {
    const menuBackgroundAnimation = gsap
      .timeline()
      .fromTo(
        el.current,
        { '--gradientSpot': '25%' },
        { '--gradientSpot': '75%', duration: 10, yoyo: true, repeat: -1 },
      );

    return () => {
      menuBackgroundAnimation.kill();
    };
  });
  return (
    <div ref={el} className={styles.menu}>
      <ul>
        <NavbarButton text={navbarText.home[lang]} href="/" />
        <NavbarButton text={navbarText.about[lang]} href="/About" />
        <NavbarButton text={navbarText.contact[lang]} href="/Contact" />
        <NavbarButton text={navbarText.download[lang]} href="/Download" />
      </ul>
    </div>
  );
}
