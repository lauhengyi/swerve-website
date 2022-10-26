import React from 'react';
import styles from '../../styles/Navbar.module.css';

export default function LanguageButton() {
  return (
    <div className={styles.languageButtonContainer}>
      <button type="button" className={styles.languageButton}>
        EN
      </button>
      <button
        type="button"
        className={`${styles.languageButton} ${styles.selected}`}
      >
        中
      </button>
    </div>
  );
}
