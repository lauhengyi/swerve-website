import React from 'react';
import BalloonVector from './BalloonVector';
import styles from '../styles/Home.module.css';

export default function BalloonScene() {
  return (
    <div className={styles.balloonScene}>
      <div className={styles.balloonTextContainer}>
        <h1 className={styles.header}>Good deals come and go</h1>
        <p className={styles.caption}>We help you catch them as they come</p>
      </div>
    </div>
  );
}
