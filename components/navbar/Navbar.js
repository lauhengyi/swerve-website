import React from 'react';
import Image from 'next/image';
import NavbarButton from './NavbarButton';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <Image src="/swerve_logo.svg" alt="logo" width={50} height={50} />
      </div>
      <ul>
        <NavbarButton text="Home" href="/" />
        <NavbarButton text="About" href="/About" />
        <NavbarButton text="Contact" href="/Contact" />
        <NavbarButton text="Download" href="/Download" />
      </ul>
    </div>
  );
};

export default Navbar;
