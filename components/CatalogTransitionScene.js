import React from 'react';
import styles from '../styles/Home.module.css';
import CatalogVector from './CatalogVector';

export default function CatalogTransitionScene() {
  const numberOfItemsPerRow = 60;
  const merchantText = 'MERCHANT';
  const customerText = 'CUSTOMER';
  return (
    <div className={styles.transitionContainer}>
      <span className={styles.catelogTransitionBackground} />
      <div className={`${styles.catelogText} ${styles.merchant}`}>
        {[...merchantText].map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
      <div className={`${styles.catelogText} ${styles.customer}`}>
        {[...customerText].map((l, i) => (
          <p key={i}>{l}</p>
        ))}
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
