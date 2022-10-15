import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import catelogItems from './content/catelogItems';

export default function CatelogVector() {
  const lengthOfDescription = Math.floor(Math.random() * 150) + 51;
  const length1 = lengthOfDescription > 100 ? 100 : lengthOfDescription;
  const length2 = lengthOfDescription <= 100 ? 0 : lengthOfDescription - 100;
  const catelogItem =
    catelogItems[Math.floor(Math.random() * catelogItems.length)];
  return (
    <div className={styles.catelog}>
      <div className={styles.catelogInnerContainer}>
        <div className={styles.catelogWindow}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              className={styles.catelogImage}
              src={catelogItem.source}
              alt={catelogItem.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <h1 className={styles.catelogName}>{catelogItem.name}</h1>
        <h2 className={styles.catelogPrice}>{`$${catelogItem.price}`}</h2>
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
