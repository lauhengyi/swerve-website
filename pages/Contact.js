import React, { useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Navigation from '../components/navigation/Navigation';
import navbarText from '../texts/navbarText';
import contactText from '../texts/contactText';

import gsap from 'gsap';
import orbAnimation from '../animations/orbAnimation';

export default function Contact() {
  const { lang } = useContext(AppContext);
  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);

    const orbAnimationInstance = orbAnimation(q);

    return () => {
      orbAnimationInstance();
    };
  }, []);
  return (
    <div>
      <Head>
        <title>{navbarText.contact[lang]}</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className="main">
        <Navigation />
        <article className="innerContainer">
          <section
            ref={el}
            className={`${styles.sectionContainer} standardWidth`}
          >
            <h1 className="header">
              {contactText.header[lang]}
              <span className="accentText">
                {contactText.headerAccent[lang]}
              </span>
            </h1>
            <div className={styles.contactDetails}>
              <div className={styles.contactContainer}>
                <Image
                  src="/contactIcons/phone.svg"
                  alt="Phone"
                  height={50}
                  width={50}
                />
                <h2 className={styles.contactTitle}>
                  {contactText.phone[lang]}
                </h2>
                <p className="text">{contactText.phoneNumber}</p>
              </div>
              <div className={styles.contactContainer}>
                <Image
                  src="/contactIcons/email.svg"
                  alt="Email"
                  height={50}
                  width={50}
                />
                <h2 className={styles.contactTitle}>
                  {contactText.generalEmail[lang]}
                </h2>
                <p className="text">{contactText.generalEmailAddress}</p>
              </div>
              <div className={styles.contactContainer}>
                <Image
                  src="/contactIcons/question.svg"
                  alt="Support"
                  height={50}
                  width={50}
                />
                <h2 className={styles.contactTitle}>
                  {contactText.supportEmail[lang]}
                </h2>
                <p className="text">{contactText.supportEmailAddress}</p>
              </div>
            </div>
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
}
