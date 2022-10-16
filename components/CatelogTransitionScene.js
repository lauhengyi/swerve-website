import React from 'react';
import styles from '../styles/Home.module.css';
import CatelogVector from './CatelogVector';

export default function CatelogTransitionScene() {
  const numberOfItemsPerRow = 60;
  return (
    <div className={styles.transitionContainer}>
      <span className={styles.catelogTransitionBackground} />
      <div className={styles.catelogRowGroup}>
        <div className={styles.catelogRow}>
          {[...Array(numberOfItemsPerRow)].map((_, index) => (
            <CatelogVector key={index} />
          ))}
        </div>
        <div className={styles.catelogRow}>
          {[...Array(numberOfItemsPerRow)].map((_, index) => (
            <CatelogVector key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
