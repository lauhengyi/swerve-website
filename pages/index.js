import React, { useEffect, useState, useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);
    const scrollAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(`.${styles.scenesContainer}`),
          scrub: 1,
          pin: true,
          end: '8000 bottom',
          snap: {
            snapTo: 'labelsDirectional',
            ease: 'linear',
            inertia: false,
            duration: { min: 2, max: 5 },
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
      .addLabel('Catalog2Scene');

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
        <title>SWERVE</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.scenesContainer}>
          <HeroScene />
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
