import React from 'react';
import styles from '../styles/Home.module.css';
import CatelogVector from './CatelogVector';

export default function CatelogTransitionScene() {
  return (
    <div className={styles.transitionContainer}>
      <div className={styles.catelogRow}>
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
        <CatelogVector />
      </div>
    </div>
  );
}
