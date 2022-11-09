import React, { useContext } from 'react';
import AppContext from '../components/AppContext';
import styles from '../styles/About.module.css';
import aboutText from '../texts/aboutText';
import navbarText from '../texts/navbarText';
import Image from 'next/image';
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
          <section className={styles.sectionContainer}>
            <div className={styles.textBox}>
              <h1 className={styles.header}>
                {aboutText.aboutUs.header[lang]}
                <span className="accentText">
                  {aboutText.aboutUs.headerAccent[lang]}
                </span>
              </h1>
              <p className={styles.text}>{aboutText.aboutUs.text1[lang]}</p>
              <p className={styles.text}>{aboutText.aboutUs.text2[lang]}</p>
              <p className={styles.text}>{aboutText.aboutUs.text3[lang]}</p>
            </div>
            <div className={styles.orbsBox}>
              <span className={styles.orb} />
              <span className={styles.orb} />
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.textBox}>
              <h1 className={styles.header}>
                {aboutText.ourTeam.header[lang]}
                <span className="accentText">
                  {aboutText.ourTeam.headerAccent[lang]}
                </span>
              </h1>
              <div className={styles.memberContainer}>
                <div className={styles.headshotContainer}>
                  <Image
                    className={styles.headshot}
                    height={300}
                    width={300}
                    src={'/headshots/hengyi.jpg'}
                    alt={"Lau Heng Yi's Headshot"}
                  />
                </div>
                <div className={styles.memberHeaderContainer}>
                  <h2 className={styles.memberName}>
                    {aboutText.ourTeam.hengYi[lang]}
                  </h2>
                  <h3 className={styles.memberTitle}>
                    {aboutText.ourTeam.hengYiTitle[lang]}
                  </h3>
                </div>
                <div className={styles.memberDescription}>
                  <p className={styles.text}>
                    {aboutText.ourTeam.hengYiText1[lang]}
                  </p>
                  <p className={styles.text}>
                    {aboutText.ourTeam.hengYiText2[lang]}
                  </p>
                  <p className={styles.text}>
                    {aboutText.ourTeam.hengYiText3[lang]}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
