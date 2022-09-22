import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
          <span className={styles.title}>SWERVE</span>
          <div className={styles.circle}>
            <span className={styles.title}>SWERVE</span>
          </div>
        </section>
      </main>
    </div>
  );
}
