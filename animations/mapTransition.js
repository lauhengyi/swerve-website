import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapTransition(q) {
  return gsap
    .timeline({
      default: { ease: 'power2.inOut' },
    })
    .to(q(`.${styles.heroScene}`), { display: 'none', duration: 0 })
    .to(q(`.${styles.mapLine}`), { strokeDashoffset: 0, duration: 4 }, '<')
    .fromTo(
      q(`.${styles.droppers}`),
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '<',
    )
    .fromTo(
      q(`.${styles.buildings} > rect`),
      { opacity: 0, scale: 1.5, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        // stagger: { amount: 3 },
        ease: 'back',
      },
      '<',
    )
    .fromTo(
      q(`.${styles.mapTextContainer} .${styles.header}`),
      { opacity: 0, filter: 'blur(20px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
      },
      '<',
    )
    .fromTo(
      q(`.${styles.mapTextContainer} .${styles.caption}`),
      { opacity: 0, filter: 'blur(10px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 1 },
      '<+=0.5',
    );
}
