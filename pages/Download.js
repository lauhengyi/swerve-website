import React, { useContext, useState } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Download.module.css';
import Navigation from '../components/navigation/Navigation';
import navbarText from '../texts/navbarText';
import downloadText from '../texts/downloadText';
import { google } from 'googleapis';

const Download = () => {
  console.log({ google });
  const { lang } = useContext(AppContext);
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>{navbarText.download[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className="main">
        <Navigation />
        <article className="innerContainer">
          <section className={`${styles.sectionContainer} standardWidth`}>
            <h1 className={`${styles.header} header`}>
              {downloadText.header[lang]}
            </h1>
            <h2 className={`${styles.header2} accentText`}>
              {downloadText.headerAccent[lang]}
            </h2>
            <form className={styles.form}>
              <input
                type="email"
                placeholder={downloadText.emailPlaceholder[lang]}
                className={styles.input}
                value={email}
                onChange={handleChange}
              />
              <button className={styles.button} type="submit">
                <Image
                  src="/arrow.svg"
                  height={100}
                  width={100}
                  alt="responsive"
                />
              </button>
            </form>
            <h3 className={styles.caption}>{downloadText.caption[lang]}</h3>
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
            <span className="orb" />
          </section>
        </article>
      </main>
    </div>
  );
};

export default Download;
