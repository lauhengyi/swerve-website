import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import MapVector from '../components/MapVector';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import heroLoading from '../animations/heroLoading';
import heroScroll from '../animations/heroScroll';
import mapScroll from '../animations/mapScroll';

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
            snapTo: 'labels',
            duration: 3,
            ease: 'linear',
            inertia: false,
          },
        },
      })
      .add(heroLoading(q))
      .addLabel('heroScroll')
      .add(heroScroll(q))
      .add(mapScroll(q), '-=0.5');
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
          <span className={styles.title}>SWERVE</span>
          <span className={styles.background}>
            <span className={styles.title}>SWERVE</span>
          </span>
          <span className={styles.circle}>
            <span className={styles.title}>SWERVE</span>
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
          <div className={styles.container}>
            <p className={styles.caption}>Connecting merchants to customers</p>
          </div>
          <div className={styles.map}>
            <MapVector />
          </div>
        </section>
      </main>
    </div>
  );
}
