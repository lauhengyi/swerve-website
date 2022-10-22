import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function heroLoading(q) {
  return gsap
    .timeline({ defaults: { ease: 'power2' } })
    .fromTo(
      q(`.${styles.title}`),
      {
        '--blur': '50px',
      },
      {
        '--blur': '0',
        duration: 1,
        ease: 'power1.in',
      },
    )
    .fromTo(
      q(`.${styles.background}`),
      { '--clip': '0%' },
      { '--clip': '150%', duration: 1.2 },
    )
    .fromTo(
      q(`.${styles.circle}`),
      {
        '--clip:': '0%',
      },
      {
        '--clip': '90vh',
        duration: 2,
      },
      '<+0.2',
    )
    .fromTo(
      q(`.${styles.displayPhone}`),
      { yPercent: 200 },
      { yPercent: 0, duration: 2.5, stagger: 0.1 },
      '<',
    )
    .fromTo(
      q(`.${styles.captionContainer} .${styles.caption}`),
      { '--blur': '10px', opacity: 0 },
      { '--blur': '0', opacity: 1, duration: 1 },
      '-=0.8',
    );
}
