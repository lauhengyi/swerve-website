import React from 'react';
import styles from '../styles/Home.module.css';
import MapVector from './MapVector';

export default function MapScene() {
  return (
    <div className={`${styles.sceneContainer} ${styles.mapScene}`}>
      <div className={styles.mapContainer}>
        <div className={styles.mapTextContainer}>
          <h1 className={styles.header}>Get on the map</h1>
          <p className={styles.caption}>
            Make your promotions seen by the people who{' '}
            <span className={styles.accentText}>wants them most</span>
          </p>
        </div>
        <MapVector />
      </div>
    </div>
  );
}
