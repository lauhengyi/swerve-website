import React, { useEffect, useRef, useContext } from 'react';
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
import navbarToBlack from '../animations/navbarToBlack';
import navbarToWhite from '../animations/navbarToWhite';

import mapSceneAnimation from '../animations/mapSceneAnimation';
import balloonSceneAnimation from '../animations/balloonSceneAnimation';

import Navbar from '../components/navbar/Navbar';
import MapScene from '../components/mapScene/MapScene';
import BalloonTransitionScene from '../components/balloonScene/BalloonTransitionScene';
import BalloonScene from '../components/balloonScene/BalloonScene';
import CatalogTransitionScene from '../components/catalogScene/CatalogTransitionScene';
import CatalogScene from '../components/catalogScene/CatalogScene';

import AppContext from '../components/AppContext';
import homeText from '../texts/homeText';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { lang } = useContext(AppContext);
  let el = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {
    const scrollAnimation = gsap
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
      .add(catalogTransition(q), '+=2')
      .add(navbarToWhite(q), '<')
      .addLabel('CatalogScene')
      .add(navbarToBlack(q), '-=1')
      .add(catalog2Transition(q), '+=1.5')
      .addLabel('Catalog2Scene');

    // Play scene animations
    const balloonScene = balloonSceneAnimation(q);
    const mapScene = mapSceneAnimation(q);

    return () => {
      scrollAnimation.revert();
      clearInterval(balloonScene);
      clearInterval(mapScene);
    };
  });

  return (
    <div ref={el}>
      <Head>
        <title>SWERVE</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.hero}>
          <h1 className={styles.title}>{homeText.hero.title[lang]}</h1>
          <span className={styles.background}>
            <h1 className={styles.title}>{homeText.hero.title[lang]}</h1>
          </span>
          <span className={styles.circle}>
            <h1 className={styles.title}>{homeText.hero.title[lang]}</h1>
            <CatalogScene />
            <BalloonScene />
            <MapScene />
            <BalloonTransitionScene />
            <CatalogTransitionScene />
          </span>
          <div className={styles.displayPhoneContainer}>
            <div className={`${styles.displayPhone} ${styles.phone1}`}>
              <Image
                src="/phones/1.png"
                alt="For you screen"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className={`${styles.displayPhone} ${styles.phone2}`}>
              <Image
                src="/phones/2.png"
                alt="Login screen"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className={`${styles.displayPhone} ${styles.phone3}`}>
              <Image
                src="/phones/3.png"
                alt="Catalog screen"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <div className={styles.captionContainer}>
            <p className={styles.caption}>{homeText.hero.caption[lang]}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
