import React from 'react';
import styles from '../styles/Home.module.css';
import CatalogVector from './CatalogVector';

export default function CatalogTransitionScene() {
  const numberOfItemsPerRow = 60;
  return (
    <div className={styles.transitionContainer}>
      <span className={styles.catelogTransitionBackground} />
      <div className={`${styles.catelogText} ${styles.customer}`}>
        <p>C</p>
        <p>C</p>
        <p>U</p>
        <p>S</p>
        <p>T</p>
        <p>O</p>
        <p>M</p>
        <p>E</p>
        <p className={styles.anchor}>R</p>
      </div>
      <div className={`${styles.catelogText} ${styles.merchant}`}>
        <p className={styles.anchor}>M</p>
        <p>M</p>
        <p>E</p>
        <p>R</p>
        <p>C</p>
        <p>H</p>
        <p>A</p>
        <p>N</p>
        <p>T</p>
      </div>
      <div className={styles.catelogRowGroup}>
        <div className={styles.catelogRow}>
          {[...Array(numberOfItemsPerRow)].map((_, index) => (
            <CatalogVector key={index} />
          ))}
        </div>
        <div className={styles.catelogRow}>
          {[...Array(numberOfItemsPerRow)].map((_, index) => (
            <CatalogVector key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
