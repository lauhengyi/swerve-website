import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function balloonTransition(q) {
  return gsap.timeline().fromTo(
    q(`.${styles.balloonVector}`),
    { y: '100vw', yPercent: 0 },
    {
      y: '0vw',
      yPercent: -100,
      duration: 1,
      stagger: {
        each: 0.1,
      },
    },
  );
}
