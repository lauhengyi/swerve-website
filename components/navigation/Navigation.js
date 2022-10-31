import React, { useRef, useEffect } from 'react';
import styles from '../../styles/Navigation.module.css';
import Navbar from './Navbar';
import Menu from './Menu';
import gsap from 'gsap';

export default function Navigation() {
  const isMenuOpen = useRef(false);

  const el = useRef();
  const menuOpenAnimation = useRef();
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
  });
  const toggleMenu = () => {
    if (isMenuOpen.current) {
      menuOpenAnimation.current.reverse();
    } else {
      menuOpenAnimation.current.play();
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
