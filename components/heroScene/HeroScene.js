import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../AppContext';
import styles from '../../styles/Home.module.css';
import homeText from '../../texts/homeText';

export default function HeroScene() {
  const { lang } = useContext(AppContext);

  return (
    <section className={`${styles.sceneContainer} ${styles.heroScene}`}>
      <h1 className={`${styles.title} accentText`}>
        {homeText.hero.title[lang]}
      </h1>
      <span className={styles.background}>
        <h1 className={styles.title}>{homeText.hero.title[lang]}</h1>
      </span>
      <span className={styles.circle}>
        <h1 className={styles.title}>{homeText.hero.title[lang]}</h1>
      </span>
      <div className={styles.displayPhoneContainer}>
        <div className={`${styles.displayPhone} ${styles.phone1}`}>
          <Image
            src="/phones/1.png"
            alt="For you screen"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={`${styles.displayPhone} ${styles.phone2}`}>
          <Image
            src="/phones/2.png"
            alt="Login screen"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={`${styles.displayPhone} ${styles.phone3}`}>
          <Image
            src="/phones/3.png"
            alt="Catalog screen"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
      <div className={styles.captionContainer}>
        <p className={styles.caption}>{homeText.hero.caption[lang]}</p>
      </div>
    </section>
  );
}
