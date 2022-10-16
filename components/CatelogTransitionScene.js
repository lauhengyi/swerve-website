import React from 'react';
import styles from '../styles/Home.module.css';
import CatelogVector from './CatelogVector';

export default function CatelogTransitionScene() {
  const numberOfItemsPerRow = 60;
  const merchantText = 'MERCHANT';
  const customerText = 'CUSTOMER';
  return (
    <div className={styles.transitionContainer}>
      <span className={styles.catelogTransitionBackground} />
      {/* <div classname={`${styles.catelogtext} ${styles.merchant}`}>
        {[...merchanttext].map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div> */}
      <div className={`${styles.catelogText} ${styles.customer}`}>
        {[...customerText].map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
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
