import React, { useEffect, useRef, useContext } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import heroLoading from '../animations/heroLoading';
import heroTransition from '../animations/heroTransition';
import mapTransition from '../animations/mapTransition';
import balloonTransition from '../animations/balloonTransition';
import catalogTransition from '../animations/catalogTransition';
import catalog2Transition from '../animations/catalog2Transition';
import outroTransition from '../animations/outroTransition';
import navbarToBlack from '../animations/navbarToBlack';
import navbarToWhite from '../animations/navbarToWhite';

import mapSceneAnimation from '../animations/mapSceneAnimation';
import balloonSceneAnimation from '../animations/balloonSceneAnimation';

import Navigation from '../components/navigation/Navigation';
import HeroScene from '../components/heroScene/HeroScene';
import MapScene from '../components/mapScene/MapScene';
import BalloonTransitionScene from '../components/balloonScene/BalloonTransitionScene';
import BalloonScene from '../components/balloonScene/BalloonScene';
import CatalogTransitionScene from '../components/catalogScene/CatalogTransitionScene';
import CatalogScene from '../components/catalogScene/CatalogScene';
import OutroScene from '../components/outroScene/OutroScene';

import navbarText from '../texts/navbarText';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { lang } = useContext(AppContext);
  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);
    const scrollAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(`.${styles.scenesContainer}`),
          scrub: 1,
          pin: true,
          end: '10000 bottom',
          snap: {
            snapTo: 'labelsDirectional',
            ease: 'linear',
            inertia: false,
            duration: { min: 1, max: 4 },
          },
        },
      })
      .add(heroLoading(q))
      .add(navbarToWhite(q), '<+=1')
      .addLabel('heroScene')
      .add(heroTransition(q))
      .add(navbarToBlack(q), '<')
      .add(mapTransition(q))
      .addLabel('mapScene')
      .add(balloonTransition(q))
      .addLabel('balloonScene')
      .add(catalogTransition(q), '+=2')
      .add(navbarToWhite(q), '<')
      .addLabel('CatalogScene')
      .add(navbarToBlack(q), '-=1')
      .add(catalog2Transition(q), '+=1')
      .addLabel('Catalog2Scene')
      .add(outroTransition(q), '+=1')
      .addLabel('outroScene');

    // Play scene animations
    const balloonScene = balloonSceneAnimation(q);
    const mapScene = mapSceneAnimation(q);

    return () => {
      scrollAnimation.revert();

      clearInterval(balloonScene);
      clearInterval(mapScene);
    };
  }, []);

  return (
    <div ref={el}>
      <Head>
        <title>{navbarText.home[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.scenesContainer}>
          <HeroScene />
          <OutroScene />
          <CatalogScene />
          <BalloonScene />
          <MapScene />
          <BalloonTransitionScene />
          <CatalogTransitionScene />
        </div>
      </main>
    </div>
  );
}
