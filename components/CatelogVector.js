import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import catelogItems from './content/catelogItems';

export default function CatelogVector() {
  const [catelogItem, setCatelogItem] = useState(catelogItems[0]);
  const [length1, setLength1] = useState(50);
  const [length2, setLength2] = useState(0);

  useEffect(() => {
    setCatelogItem(
      catelogItems[Math.floor(Math.random() * catelogItems.length)],
    );

    const lengthOfDescription = Math.floor(Math.random() * 150) + 51;
    setLength1(lengthOfDescription > 100 ? 100 : lengthOfDescription);
    setLength2(lengthOfDescription <= 100 ? 0 : lengthOfDescription - 100);
  }, []);
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
