import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import catalogItems from '../content/catalogItems';

export default function CatalogItemVector({ index }) {
  const catalogItem = catalogItems[index];
  return (
    <div className={styles.catalogItem}>
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
  );
}
