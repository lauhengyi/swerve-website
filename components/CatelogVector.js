import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function CatelogVector({ name, price, source }) {
  const lengthOfDescription = Math.floor(Math.random() * 150) + 51;
  const length1 = lengthOfDescription > 100 ? 100 : lengthOfDescription;
  const length2 = lengthOfDescription <= 100 ? 0 : lengthOfDescription - 100;
  return (
    <div className={styles.catelog}>
      <div className={styles.catelogInnerContainer}>
        <div className={styles.catelogWindow}>
          <Image src={'/catelogItems/box.svg'} layout="fill" />
        </div>
        <h1 className={styles.catelogName}>hellow there</h1>
        <h2 className={styles.catelogPrice}>$50</h2>
        <span
          className={styles.catelogDescription}
          style={{ width: `${length1}%` }}
        />
        <span
          className={styles.catelogDescription}
          style={{ width: `${length2}%` }}
        />
      </div>
    </div>
  );
}
