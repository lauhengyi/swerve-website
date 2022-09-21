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
        <span className={styles.circle} />
        <div className={styles.container}>
          <h1 className={styles.title}>SWERVE</h1>
        </div>
      </main>
    </div>
  );
}
