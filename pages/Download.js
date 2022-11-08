import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/navigation/Navigation';

const Download = () => {
  return (
    <div>
      <Head>
        <title>Download</title>
        <link rel="icon" href="/swerve_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
      </main>
    </div>
  );
};

export default Download;
