import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swerve</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.hero}>
          <span className={`${styles.title} ${styles.blur}`}>SWERVE</span>
          <span className={styles.background}>
            <span className={styles.title}>SWERVE</span>
          </span>
          <span className={styles.circle}>
            <span className={styles.title}>SWERVE</span>
          </span>
          <div className={styles.phones}>
            <div className={styles.phone1}>
              <Image
                src="/phones/1.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.phone2}>
              <Image
                src="/phones/2.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.phone3}>
              <Image
                src="/phones/3.svg"
                alt="phone1"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
