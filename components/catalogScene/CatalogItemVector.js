import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import catalogItems from '../content/catalogItems';

export default function CatalogItemVector({ index }) {
  const [catalogItem, setCatalogItem] = useState(catalogItems[0]);
  useEffect(() => {
    setCatalogItem(catalogItems[index]);
  }, [index]);
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
