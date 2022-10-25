import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import heroLoading from '../animations/heroLoading';
import heroTransition from '../animations/heroTransition';
import mapTransition from '../animations/mapTransition';
import balloonTransition from '../animations/balloonTransition';
import catalogTransition from '../animations/catalogTransition';
import catalog2Transition from '../animations/catalog2Transition';

import mapSceneAnimation from '../animations/mapSceneAnimation';
import balloonSceneAnimation from '../animations/balloonSceneAnimation';

import Navbar from '../components/navbar/Navbar';
import MapScene from '../components/mapScene/MapScene';
import BalloonTransitionScene from '../components/balloonScene/BalloonTransitionScene';
import BalloonScene from '../components/balloonScene/BalloonScene';
import CatalogTransitionScene from '../components/catalogScene/CatalogTransitionScene';
import CatalogScene from '../components/catalogScene/CatalogScene';
import navbarToBlack from '../animations/navbarToBlack';
import navbarToWhite from '../animations/navbarToWhite';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let el = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(`.${styles.hero}`),
          scrub: 2,
          pin: true,
          end: '10000',
          snap: {
            snapTo: 'labelsDirectional',
            ease: 'linear',
            inertia: false,
            duration: { min: 2, max: 5 },
          },
        },
      })
      .add(heroLoading(q))
      .addLabel('heroScene')
      .add(heroTransition(q))
      .add(navbarToBlack(q), '<')
      .add(mapTransition(q))
      .addLabel('mapScene')
      .add(balloonTransition(q))
      .addLabel('balloonScene')
      .add(catalogTransition(q))
      .add(navbarToWhite(q), '<')
      .addLabel('CatalogScene')
      .add(navbarToBlack(q), '-=1')
      .add(catalog2Transition(q))
      .addLabel('Catalog2Scene');

    // Play scene animations
    const balloonScene = balloonSceneAnimation(q);
    const mapScene = mapSceneAnimation(q);

    return () => {
      clearInterval(balloonScene);
      clearInterval(mapScene);
    };
  });
  return (
    <div ref={el}>
      <Head>
        <title>Swerve</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.hero}>
          <h1 className={styles.title}>SWERVE</h1>
          <span className={styles.background}>
            <h1 className={styles.title}>SWERVE</h1>
          </span>
          <span className={styles.circle}>
            <h1 className={styles.title}>SWERVE</h1>
            <CatalogScene />
            <BalloonScene />
            <MapScene />
            <BalloonTransitionScene />
            <CatalogTransitionScene />
          </span>
          <div className={styles.displayPhoneContainer}>
            <div className={`${styles.displayPhone} ${styles.phone1}`}>
              <Image
                src="/phones/1.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={`${styles.displayPhone} ${styles.phone2}`}>
              <Image
                src="/phones/2.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={`${styles.displayPhone} ${styles.phone3}`}>
              <Image
                src="/phones/3.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.captionContainer}>
            <p className={styles.caption}>Connecting merchants to customers</p>
          </div>
        </section>
      </main>
    </div>
  );
}
