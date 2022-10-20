import React from 'react';
import styles from '../styles/Home.module.css';
import CatalogVector from './CatalogVector';
import CatalogItemVector from './CatalogItemVector';
import CatalogCoinVector from './CatalogCoinVector';

export default function CatalogTransitionScene() {
  const numberOfItems1 = 30;
  const numberOfItems2 = 30;
  return (
    <div
      className={`${styles.transitionContainer} ${styles.catalogTransition}`}
    >
      <span className={styles.catalogTransitionBackground}>
        <div className={styles.catalogItemContainer}>
          <CatalogItemVector index={1} />
          <CatalogItemVector index={2} />
          <CatalogItemVector index={3} />
          <CatalogItemVector index={4} />
          <CatalogItemVector index={5} />
          <CatalogItemVector index={6} />
          <CatalogItemVector index={7} />
          <CatalogItemVector index={8} />
        </div>
        {/* <div className={styles.catalogCoinContainer}>
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
          <CatalogCoinVector />
        </div> */}
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
          {/* {[...Array(numberOfItems2)].map((_, index) => (
            <CatalogVector key={index} />
          ))} */}
          <CatalogVector index={1} />
          <CatalogVector index={2} />
          <CatalogVector index={3} />
          <CatalogVector index={4} />
          <CatalogVector index={5} />
          <CatalogVector index={6} />
          <CatalogVector index={7} />
          <CatalogVector index={8} />
          {[...Array(numberOfItems1)].map((_, index) => (
            <CatalogVector key={index} />
          ))}
        </div>
        <div className={styles.catalogRow}>
          {[...Array(numberOfItems1)].map((_, index) => (
            <CatalogVector key={index} />
          ))}
          <CatalogVector index={1} />
          <CatalogVector index={2} />
          <CatalogVector index={3} />
          <CatalogVector index={4} />
          <CatalogVector index={5} />
          <CatalogVector index={6} />
          <CatalogVector index={7} />
          <CatalogVector index={8} />
          {/* {[...Array(numberOfItems2)].map((_, index) => (
            <CatalogVector key={index} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
