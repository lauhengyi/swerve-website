import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.menuButtonContainer}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.menuButtonLine} />
        <span className={styles.menuButtonLine} />
        <span className={styles.menuButtonLine} />
      </button>
      {isOpen && <div className={styles.menu}></div>}
    </div>
  );
}
