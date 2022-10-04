import React from 'react';
import styles from '../styles/Home.module.css';
import MapVector from './MapVector';

export default function MapScene() {
  return (
    <>
      <div className={styles.mapTextContainer}>
        <h1 className={styles.header}>Get on the map</h1>
        <p className={styles.caption}>
          Make your promotions seen by the people who wants them most
        </p>
      </div>
      <MapVector />
    </>
  );
}
