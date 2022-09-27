import React, {useRef} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';

export default function Home() {
  let el = useRef();
  let q = 
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
