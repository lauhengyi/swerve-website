import React, { useContext } from 'react';
import AppContext from '../AppContext';
import homeText from '../../texts/homeText';
import navbarText from '../../texts/navbarText';
import NavbarButton from '../navigation/NavbarButton';
import styles from '../../styles/Home.module.css';

export default function OutroScene() {
  const { lang } = useContext(AppContext);
  return (
    <section className={`${styles.sceneContainer} ${styles.outroScene}`}>
      <h1 className={styles.header}>{homeText.outro.header[lang]}</h1>
      <ul className={`${styles.navigation}`}>
        <NavbarButton text={navbarText.home[lang]} href="/" />
        <NavbarButton text={navbarText.about[lang]} href="/About" />
        <NavbarButton text={navbarText.contact[lang]} href="/Contact" />
        <NavbarButton text={navbarText.download[lang]} href="/Download" />
      </ul>
    </section>
  );
}
