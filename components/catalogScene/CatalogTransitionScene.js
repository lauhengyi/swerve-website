import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import CatalogVector from './CatalogVector';
import CatalogItemVector from './CatalogItemVector';
import CatalogCoinVector from './CatalogCoinVector';
import catalogItems from '../content/catalogItems';

export default function CatalogTransitionScene() {
  const numberOfItemsBetween = 35;
  const [catalogItemIndexes, setCatalogItemsIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);

  useEffect(() => {
    setCatalogItemsIndexes(
      [...catalogItemIndexes].map(() =>
        Math.floor(Math.random() * catalogItems.length),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles.transitionContainer} ${styles.catalogTransition}`}
    >
      <div className={styles.catalogItemContainer}>
        {catalogItemIndexes.map((index, i) => (
          <CatalogItemVector index={index} key={i} />
        ))}
      </div>
      <span className={styles.catalogTransitionBackground}>
        <div className={styles.catalogCoinContainer}>
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
        </div>
      </span>
      <div className={`${styles.catalogText} ${styles.customer}`}>
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
      <div className={`${styles.catalogText} ${styles.merchant}`}>
        <p>M</p>
        <p>M</p>
        <p>E</p>
        <p>R</p>
        <p>C</p>
        <p>H</p>
        <p>A</p>
        <p>N</p>
        <p className={styles.anchor}>T</p>
      </div>
      <div className={styles.catalogRowGroup}>
        <div className={styles.catalogRow}>
          {[...Array(numberOfItemsBetween)].map((_, i) => (
            <CatalogVector key={i} />
          ))}
          {catalogItemIndexes.map((index, i) => (
            <CatalogVector index={index} key={i} />
          ))}
          {[...Array(numberOfItemsBetween)].map((_, i) => (
            <CatalogVector key={i} />
          ))}
        </div>
        <div className={styles.catalogRow}>
          {[...Array(numberOfItemsBetween)].map((_, i) => (
            <CatalogVector key={i} />
          ))}
          {catalogItemIndexes.map((index, i) => (
            <CatalogVector index={index} key={i} />
          ))}
          {[...Array(numberOfItemsBetween)].map((_, i) => (
            <CatalogVector key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
