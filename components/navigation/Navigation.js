import React, { useRef, useEffect } from 'react';
import styles from '../../styles/Navigation.module.css';
import Navbar from './Navbar';
import Menu from './Menu';
import gsap from 'gsap';

export default function Navigation() {
  const isMenuOpen = useRef(false);

  const el = useRef();
  const menuOpenAnimation = useRef();
  const menuButtonAnimation = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {
    // console.log(q(`.${styles.menu}`));
    menuOpenAnimation.current = gsap
      .timeline({ paused: true })
      .fromTo(
        q(`.${styles.menu}`),
        { '--clip': '0vh' },
        { '--clip': '150vh', duration: 0.7 },
      );

    menuButtonAnimation.current = gsap
      .timeline({ paused: true })
      .fromTo(
        q(`.${styles.menuButtonLine}:nth-of-type(1)`),
        { rotate: '0deg', x: '0rem' },
        { rotate: '45deg', x: '0.25rem', duration: 0.3 },
      )
      .fromTo(
        q(`.${styles.menuButtonLine}:nth-of-type(3)`),
        { rotate: '0deg', x: '0rem' },
        { rotate: '-45deg', x: '0.25rem', duration: 0.3 },
        '<',
      )
      .fromTo(
        q(`.${styles.menuButtonLine}:nth-of-type(2)`),
        { opacity: 1, x: '0rem' },
        { opacity: 0, x: '-1rem', duration: 0.3 },
        '<',
      );
  });
  const toggleMenu = () => {
    if (isMenuOpen.current) {
      menuOpenAnimation.current.reverse();
      menuButtonAnimation.current.reverse();
    } else {
      menuOpenAnimation.current.play();
      menuButtonAnimation.current.play();
    }
    isMenuOpen.current = !isMenuOpen.current;
  };

  return (
    <div ref={el} className={styles.navigation}>
      <Menu toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
    </div>
  );
}
