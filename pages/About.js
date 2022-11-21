import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../components/AppContext';
import Image from 'next/image';
import Head from 'next/head';

import gsap from 'gsap';
import styles from '../styles/About.module.css';
import aboutText from '../texts/aboutText';
import navbarText from '../texts/navbarText';
import Navigation from '../components/navigation/Navigation';
import MemberHeader from '../components/about/MemberHeaders';

export default function About() {
  const { lang } = useContext(AppContext);

  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);

    const orbPulsatingAnimation = gsap
      .timeline({
        paused: true,
        defaults: {
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          ease: 'power1.inOut',
        },
      })
      .to('.orb', {
        scale: 'random(0.9, 1.1)',
        duration: 'random(1s, 5s)',
      })
      .to(
        '.orb',
        {
          rotate: 'random(-30, 30)',
          duration: 'random(2s, 5s)',
        },
        '<',
      )
      .to(
        q(`.orb`),
        {
          y: 'random(-20, 20)',
          x: 'random(-20, 20)',
          duration: 'random(2s, 4s)',
        },
        '<',
      );

    const orbPop = gsap.timeline({ delay: 0.5 }).from(`.orb`, {
      scale: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: 'back',
      onComplete: () => orbPulsatingAnimation.play(),
    });

    return () => {
      orbPulsatingAnimation.kill();
      orbPop.kill();
    };
  });

  return (
    <div>
      <Head>
        <title>{navbarText.about[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main ref={el} className="main">
        <Navigation />
        <article className="innerContainer">
          <section className={`${styles.sectionContainer} standardWidth`}>
            <div className={styles.textBox}>
              <h1 className="header">
                {aboutText.aboutUs.header[lang]}
                <span className="accentText">
                  {aboutText.aboutUs.headerAccent[lang]}
                </span>
              </h1>
              <p className="text">{aboutText.aboutUs.text1[lang]}</p>
              <p className="text">{aboutText.aboutUs.text2[lang]}</p>
              <p className="text">{aboutText.aboutUs.text3[lang]}</p>
            </div>
            <div className={styles.orbsBox}>
              <span className="orb" />
              <span className="orb" />
            </div>
          </section>
          <section className={`${styles.sectionContainer} standardWidth`}>
            <div className={styles.textBox}>
              <h1 className="header">
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
                <MemberHeader
                  name={aboutText.ourTeam.hengYi[lang]}
                  title={aboutText.ourTeam.hengYiTitle[lang]}
                />
                <div className={styles.memberDescription}>
                  <p className="text">{aboutText.ourTeam.hengYiText1[lang]}</p>
                  <p className="text">{aboutText.ourTeam.hengYiText2[lang]}</p>
                  <p className="text">{aboutText.ourTeam.hengYiText3[lang]}</p>
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
                <MemberHeader
                  name={aboutText.ourTeam.roydon[lang]}
                  title={aboutText.ourTeam.roydonTitle[lang]}
                />
                <div className={styles.memberDescription}>
                  <p className="text">{aboutText.ourTeam.roydonText1[lang]}</p>
                  <p className="text">{aboutText.ourTeam.roydonText2[lang]}</p>
                  <p className="text">{aboutText.ourTeam.roydonText3[lang]}</p>
                  <p className="text">{aboutText.ourTeam.roydonText4[lang]}</p>
                </div>
              </div>
            </div>
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
          </section>
        </article>
      </main>
    </div>
  );
}
