import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/Home.module.css';
import gsap from 'gsap';
import CatalogVector from './CatalogVector';
import CatalogItemVector from './CatalogItemVector';
import catalogItems from '../content/catalogItems';
import PhoneVector from './PhoneVector';
import catalogSceneAnimation from '../../animations/catalogSceneAnimation';

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

  const nextIndex = catalogs[catalogs.length - 1].index;

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
      )
      .add(catalogSceneAnimation(q), '<+=0.5');
  }, [catalogs]);

  return (
    <div ref={el} className={`${styles.sceneContainer} ${styles.catalogScene}`}>
      <div className={styles.catalogTextContainer}>
        <h1 className={styles.header}>
          Look through the catalog of shops in your area...
        </h1>
      </div>
      <div className={styles.catalogPanningRow}>
        {catalogs.map((values, i) => (
          <CatalogVector
            index={values.index}
            lengthOfDescription={values.lengthOfDescription}
            key={i}
          />
        ))}
      </div>
      <CatalogItemVector index={nextIndex} />
      <PhoneVector index={nextIndex} />
    </div>
  );
}
