import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/Navigation.module.css';
import Navbar from './Navbar';
import Menu from './Menu';
import gsap from 'gsap';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { '--clip': '150vh', duration: 1 },
      );
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
      <Menu isMenuOpen={isMenuOpen} />
      <Navbar toggleMenu={toggleMenu} />
    </div>
  );
}
