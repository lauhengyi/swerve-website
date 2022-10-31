import React, { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../AppContext';
import navbarText from '../../texts/navbarText';
import NavbarButton from './NavbarButton';
import LanguageButton from './LanguageButton';
import styles from '../../styles/Navbar.module.css';
import MenuButton from './menuButton';
import Menu from './Menu';
import gsap from 'gsap';

const Navbar = () => {
  const { lang } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const el = useRef();
  const menuOpenAnimation = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {
    menuOpenAnimation.current = gsap
      .timeline({ paused: true })
      .fromTo(
        q(`.${styles.menu}`),
        { '--clip': '0vh' },
        { '--clip': '150vh', duration: 1 },
      );

    // return () => {
    //   menuOpenAnimation.current.kill();
    //   setIsMenuOpen(false);
    // };
  });
  const toggleMenu = () => {
    if (isMenuOpen) {
      menuOpenAnimation.current.reverse();
    } else {
      menuOpenAnimation.current.play();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={el} className={styles.navigation}>
      <div className={styles.logoContainer}>
        <svg
          className={styles.logo}
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.logoComponent}
            d="M546.462 464.369C401.105 374.929 557.635 221.684 687.504 374.217C780.376 483.296 804.02 773.373 466.049 937.717C687.2 800.84 714.006 567.461 546.462 464.369Z"
          />
          <path
            className={styles.logoComponent}
            d="M477.898 559.348C623.256 648.788 466.726 802.033 336.857 649.5C243.985 540.42 220.341 250.344 558.311 86C337.16 222.877 310.355 456.255 477.898 559.348Z"
          />
        </svg>
      </div>
      <ul>
        <NavbarButton text={navbarText.home[lang]} href="/" />
        <NavbarButton text={navbarText.about[lang]} href="/About" />
        <NavbarButton text={navbarText.contact[lang]} href="/Contact" />
        <NavbarButton text={navbarText.download[lang]} href="/Download" />
      </ul>
      <LanguageButton />
      <MenuButton toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navbar;
