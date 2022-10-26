import React from 'react';
import NavbarButton from './NavbarButton';
import LanguageButton from './languageButton';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navigation}>
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
        <NavbarButton text="Home" href="/" />
        <NavbarButton text="About" href="/About" />
        <NavbarButton text="Contact" href="/Contact" />
        <NavbarButton text="Download" href="/Download" />
      </ul>
      <LanguageButton />
    </div>
  );
};

export default Navbar;
