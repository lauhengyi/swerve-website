import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../components/AppContext';
import styles from '../styles/About.module.css';
import aboutText from '../texts/aboutText';
import navbarText from '../texts/navbarText';
import Head from 'next/head';
import Navigation from '../components/navigation/Navigation';

export default function About() {
  const { lang } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>{navbarText.about[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <article className={styles.innerContainer}>
          <section className={styles.aboutUs}>
            <h1 className={styles.header}>
              {aboutText.aboutUs.header[lang]}
              <span className="accentText">
                {aboutText.aboutUs.headerAccent[lang]}
              </span>
            </h1>
            <p></p>
          </section>
        </article>
      </main>
    </div>
  );
}
