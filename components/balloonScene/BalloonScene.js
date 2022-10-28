import React, { useContext } from 'react';
import AppContext from '../AppContext';
import homeText from '../../texts/homeText';
import BalloonVector from './BalloonVector';
import styles from '../../styles/Home.module.css';

export default function BalloonScene() {
  const { lang } = useContext(AppContext);
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
          <h1 className={styles.header}>{homeText.balloon.header[lang]}</h1>
          <p className={styles.caption}>
            {homeText.balloon.caption[lang]}
            <span className={styles.accentText}>
              {homeText.balloon.accent[lang]}
            </span>
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
