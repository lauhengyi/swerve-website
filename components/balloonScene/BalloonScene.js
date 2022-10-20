import React from 'react';
import BalloonVector from './BalloonVector';
import styles from '../../styles/Home.module.css';

export default function BalloonScene() {
  const balloonText = [
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%',
    '90%',
  ];
  return (
    <div className={`${styles.sceneContainer} ${styles.balloonScene}`}>
      <div className={styles.boundingContainer}>
        <div className={styles.balloonTextContainer}>
          <h1 className={styles.header}>Good deals come and go</h1>
          <p className={styles.caption}>
            We help you catch them{' '}
            <span className={styles.accentText}>as they come</span>
          </p>
        </div>
        <div className={styles.balloonHoldingContainer}>
          {balloonText.map((text, index) => (
            <BalloonVector text={text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
