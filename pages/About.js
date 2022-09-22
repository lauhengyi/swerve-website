import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.section}>
      <span className={styles.sliding}>SWERVE</span>
      <span className={styles.wrapper}>
        <span className={styles.sliding}>SWERVE</span>
      </span>
    </section>
  );
};

export default About;
