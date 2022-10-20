import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import catalogItems from '../content/catalogItems';

export default function CatalogVector({ index, lengthOfDescription }) {
  const [catalogItem, setCatalogItem] = useState(catalogItems[0]);
  const [length1, setLength1] = useState(50);
  const [length2, setLength2] = useState(0);

  useEffect(() => {
    const currIndex = index ?? Math.floor(Math.random() * catalogItems.length);
    setCatalogItem(catalogItems[currIndex]);

    const currLengthOfDescription =
      lengthOfDescription ?? Math.floor(Math.random() * 150) + 51;
    setLength1(currLengthOfDescription > 100 ? 100 : currLengthOfDescription);
    setLength2(
      currLengthOfDescription <= 100 ? 0 : currLengthOfDescription - 100,
    );
  }, []);
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogInnerContainer}>
        <div className={styles.catalogWindow}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              className={styles.catalogImage}
              src={catalogItem.source}
              alt={catalogItem.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <h1 className={styles.catalogName}>{catalogItem.name}</h1>
        <h2 className={styles.catalogPrice}>{`$${catalogItem.price}`}</h2>
        <span
          className={styles.catalogDescription}
          style={{ width: `${length1}%` }}
        />
        <span
          className={styles.catalogDescription}
          style={{ width: `${length2}%` }}
        />
      </div>
    </div>
  );
}
