import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <Image src="/swerve_logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/About">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/Contact">
          <a>Contact Us</a>
        </Link>
      </div>
      <div>
        <Link href="/Download">
          <a>Download the App</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
