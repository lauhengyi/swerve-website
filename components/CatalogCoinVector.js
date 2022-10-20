import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function CatalogCoinVector() {
  return (
    <div className={styles.catalogItem}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
          className={styles.catalogImage}
          src={'/coin.svg'}
          alt={'coin'}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
