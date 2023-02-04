import React from 'react';
import BalloonVector from './BalloonVector';
import styles from '../../styles/Home.module.css';

export default function BalloonTransitionScene() {
  return (
    <div
      className={`${styles.transitionContainer} ${styles.balloonTransition}`}
    >
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
      <BalloonVector />
    </div>
  );
}
