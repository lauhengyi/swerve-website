import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import heroLoading from '../animations/heroLoading';
import heroScroll from '../animations/heroScroll';
import mapScroll from '../animations/mapScroll';
import balloonTransition from '../animations/balloonTransition';

import Navbar from '../components/Navbar';
import MapScene from '../components/MapScene';
import BalloonTransitionScene from '../components/BalloonTransitionScene';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let el = useRef();
  let q = gsap.utils.selector(el);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(`.${styles.hero}`),
          scrub: 1,
          pin: true,
          start: 'top top',
          end: '3000',
          snap: {
            snapTo: 'labelsDirectional',
            duration: 3,
            ease: 'linear',
            inertia: false,
          },
        },
      })
      .add(heroLoading(q))
      .addLabel('heroScroll')
      .add(heroScroll(q))
      .add(mapScroll(q))
      .addLabel('mapScroll')
      .add(balloonTransition(q));
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
            <MapScene />
            <BalloonTransitionScene />
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
