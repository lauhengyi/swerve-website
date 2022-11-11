import React, { useContext } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Navigation from '../components/navigation/Navigation';
import navbarText from '../texts/navbarText';
import contactText from '../texts/contactText';

export default function Contact() {
  const { lang } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>{navbarText.contact[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className="main">
        {/* <Navigation /> */}
        {/* <article className="innerContainer">
          <section className={`${styles.sectionContainer} standardWidth`} />
          <h1 className="header">
            {contactText.header[lang]}
            <span className="accentText">{contactText.headerAccent[lang]}</span>
          </h1>
        </article> */}
      </main>
    </div>
  );
}
