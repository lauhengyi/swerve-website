import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/navigation/Navigation';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
      </main>
    </div>
  );
}
