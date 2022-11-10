import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../components/AppContext';
import gsap from 'gsap';
import styles from '../styles/About.module.css';
import aboutText from '../texts/aboutText';
import navbarText from '../texts/navbarText';
import Image from 'next/image';
import Head from 'next/head';
import Navigation from '../components/navigation/Navigation';

export default function About() {
  const { lang } = useContext(AppContext);

  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);
    const orbPulsatingAnimation = gsap
      .timeline({
        defaults: {
          repeat: -1,
          repeatRefresh: true,
          yoyo: true,
          ease: 'power1.inOut',
        },
      })
      .to(q(`.${styles.orb}`), {
        scale: 'random(0.9, 1.1)',
        duration: 'random(2s, 4s)',
      })
      .to(
        q(`.${styles.orb}`),
        {
          rotate: 'random(-30, 30)',
          duration: 'random(2s, 4s)',
        },
        '<',
      )
      .to(
        q(`.${styles.orb}`),
        {
          y: 'random(-20, 20)',
          x: 'random(-20, 20)',
          duration: 'random(2s, 4s)',
        },
        '<',
      );

    return () => {
      orbPulsatingAnimation.kill();
    };
  });

  return (
    <div>
      <Head>
        <title>{navbarText.about[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main ref={el} className={styles.main}>
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
              <div className={styles.memberContainer}>
                <div className={styles.headshotContainer}>
                  <Image
                    className={styles.headshot}
                    height={300}
                    width={300}
                    src={'/headshots/roydon.jpg'}
                    alt={"Roydon Tay's Headshot"}
                  />
                </div>
                <div className={styles.memberHeaderContainer}>
                  <h2 className={styles.memberName}>
                    {aboutText.ourTeam.roydon[lang]}
                  </h2>
                  <h3 className={styles.memberTitle}>
                    {aboutText.ourTeam.roydonTitle[lang]}
                  </h3>
                </div>
                <div className={styles.memberDescription}>
                  <p className={styles.text}>
                    {aboutText.ourTeam.roydonText1[lang]}
                  </p>
                  <p className={styles.text}>
                    {aboutText.ourTeam.roydonText2[lang]}
                  </p>
                  <p className={styles.text}>
                    {aboutText.ourTeam.roydonText3[lang]}
                  </p>
                  <p className={styles.text}>
                    {aboutText.ourTeam.roydonText4[lang]}
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
