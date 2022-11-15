import React, { useContext, useState } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import styles from '../styles/Download.module.css';
import Navigation from '../components/navigation/Navigation';
import navbarText from '../texts/navbarText';
import downloadText from '../texts/downloadText';

const Download = () => {
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
              {' '}
              {downloadText.header[lang]}
            </h1>
            <h2 className={`${styles.header2} accentText`}>
              {downloadText.headerAccent[lang]}
            </h2>
            <input
              type="email"
              placeholder={downloadText.emailPlaceholder[lang]}
              className={styles.input}
              value={email}
              onChange={handleChange}
            />
            <h3 className={styles.caption}>{downloadText.caption[lang]}</h3>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Download;
