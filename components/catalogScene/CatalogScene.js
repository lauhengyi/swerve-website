import React, { useEffect, useState, useRef, useContext } from 'react';
import AppContext from '../AppContext';
import homeText from '../../texts/homeText';
import styles from '../../styles/Home.module.css';
import gsap from 'gsap';
import CatalogVector from './CatalogVector';
import CatalogItemVector from './CatalogItemVector';
import catalogItems from '../content/catalogItems';
import PhoneVector from './PhoneVector';
import catalogSceneAnimation from '../../animations/catalogSceneAnimation';

export default function CatalogScene() {
  const { lang } = useContext(AppContext);
  const numberOfCatalogs = 20;
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

  const nextIndex = catalogs[0].index;

  useEffect(() => {
    const catalogAnimation = gsap
      .timeline({ paused: true })
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
        { x: '17vh' },
        {
          x: '0',
          ease: 'linear',
          duration: 4,
        },
        '<',
      )
      .add(catalogSceneAnimation(q), '<')
      .fromTo(
        q(`.${styles.catalog}:first-of-type`),
        { opacity: 0 },
        {
          keyframes: {
            '0%': { opacity: 0, scale: 1, y: '40vh' },
            '15%': { opacity: 1, scale: 2, y: '25vh' },
            '80%': { y: '25vh' },
            '100%': { y: '0vh', ease: 'back' },
          },
          duration: 3,
        },
        '<+=1',
      );

    catalogAnimation.play();
    return () => {
      catalogAnimation.kill();
    };
  }, [catalogs, q]);

  return (
    <div ref={el} className={`${styles.sceneContainer} ${styles.catalogScene}`}>
      <div className={styles.catalogTextContainer}>
        <h1 className={styles.header}>{homeText.catalog.header[lang]}</h1>
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
      <div className={styles.catalog2TextContainer}>
        <h1 className={styles.header}>{homeText.catalog.header2[lang]}</h1>
      </div>
      <CatalogItemVector index={nextIndex} />
      <PhoneVector index={nextIndex} />
    </div>
  );
}
