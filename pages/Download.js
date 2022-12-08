import React, { useContext, useState } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Download.module.css';
import Navigation from '../components/navigation/Navigation';
import navbarText from '../texts/navbarText';
import downloadText from '../texts/downloadText';

const Download = () => {
  const { lang } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(0);
  const statusText = {
    0: '',
    1: downloadText.success[lang],
    2: downloadText.error[lang],
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // 0 = not submitted, 1 = success, 2 = error
    if (response.ok) {
      setStatus(1);
    } else {
      setStatus(2);
    }
    setEmail('');
    setTimeout(() => {
      setStatus(0);
    }, 5000);
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
            <form className={styles.form} onSubmit={handleSubmit}>
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
            <p
              className={styles.statusText}
              style={{ color: status == 1 ? 'green' : 'red' }}
            >
              {statusText[status]}
            </p>
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
