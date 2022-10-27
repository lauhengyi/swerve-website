import React, { useContext } from 'react';
import AppContext from '../AppContext';
import homeText from '../../texts/homeText';
import styles from '../../styles/Home.module.css';
import MapVector from './MapVector';

export default function MapScene() {
  const { lang } = useContext(AppContext);
  return (
    <div className={`${styles.sceneContainer} ${styles.mapScene}`}>
      <div className={styles.mapContainer}>
        <div className={styles.mapTextContainer}>
          <h1 className={styles.header}>{homeText.map.header[lang]}</h1>
          <p className={styles.caption}>
            {homeText.map.caption[lang]}
            <span className={styles.accentText}>
              {homeText.map.accent[lang]}
            </span>
          </p>
        </div>
        <MapVector />
      </div>
    </div>
  );
}
