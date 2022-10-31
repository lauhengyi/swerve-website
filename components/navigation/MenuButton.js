import React from 'react';
import styles from '../../styles/Navigation.module.css';

export default function MenuButton({ toggleMenu }) {
  return (
    <div className={styles.menuButtonContainer}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuButtonLine} />
        <span className={styles.menuButtonLine} />
        <span className={styles.menuButtonLine} />
      </button>
    </div>
  );
}
