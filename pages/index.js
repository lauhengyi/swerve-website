import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';

export default function Home() {
  let el = useRef();
  let q = gsap.utils.selector(el);
  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: 'power2' } })
      .fromTo(
        q(`.${styles.title}`),
        {
          '--blur': '50px',
        },
        {
          '--blur': '0',
          duration: 1,
          ease: 'power1.in',
        },
      )
      .fromTo(
        q(`.${styles.background}`),
        { '--clip': '0%' },
        { '--clip': '150%', duration: 1.2 },
      )
      .fromTo(
        q(`.${styles.circle}`),
        {
          '--clip:': '0%',
        },
        {
          '--clip': '80vh',
          duration: 2,
        },
        '<+0.2',
      )
      .fromTo(
        q(`.${styles.displayPhone}`),
        { yPercent: 200 },
        { yPercent: 0, duration: 2.5, stagger: 0.1 },
        '<',
      )
      .fromTo(
        q(`.${styles.caption}`),
        { '--blur': '10px', opacity: 0 },
        { '--blur': '0', opacity: 1, duration: 1 },
        '-=0.8',
      );
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
        </section>
      </main>
    </div>
  );
}
