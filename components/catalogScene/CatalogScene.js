import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/Home.module.css';
import gsap from 'gsap';
import CatalogVector from './CatalogVector';
import catalogItems from '../content/catalogItems';

export default function CatalogScene() {
  const numberOfCatalogs = 30;
  let el = useRef();
  let q = gsap.utils.selector(el);

  const [catalogs, setCatalogs] = useState(
    [...Array(numberOfCatalogs)].map(() => {
      return {
        index: Math.floor(Math.random() * catalogItems.length),
        lengthOfDescription: Math.floor(Math.random() * 150) + 51,
      };
    }),
  );

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        q(`.${styles.catalogPanningRow}`),
        { x: '0' },
        {
          x: '17vh',
          ease: 'linear',
          duration: 4,
          onComplete: () => {
            const newCatalogs = [...catalogs];
            const lastCatalog = newCatalogs.pop();
            newCatalogs.unshift(lastCatalog);
            setCatalogs(newCatalogs);
          },
        },
      )
      .fromTo(
        q(`.${styles.catalog}:first-of-type`),
        { opacity: 0, y: '20vh' },
        { opacity: 1, y: '0vh', duration: 1 },
        '<',
      );
  }, [catalogs]);

  return (
    <div ref={el} className={`${styles.sceneContainer} ${styles.catalogScene}`}>
      <div className={styles.catalogPanningContainer}>
        <div className={styles.catalogPanningRow}>
          {catalogs.map((values, i) => (
            <CatalogVector
              index={values.index}
              lengthOfDescription={values.lengthOfDescription}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
