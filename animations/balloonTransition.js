import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function balloonTransition(q) {
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.balloonVector}`),
      { y: '100vh', yPercent: 0 },
      {
        y: '0vh',
        yPercent: -100,
        duration: 1,
        stagger: {
          each: 0.1,
        },
      },
    )
    .fromTo(
      q(`.${styles.mapScene}`),
      { '--wipe': '0%' },
      { '--wipe': '100%', duration: 0.3, ease: 'linear' },
      '<+=1.8',
    );
}
