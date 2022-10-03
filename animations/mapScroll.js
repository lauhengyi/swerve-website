import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapScroll(q) {
  gsap.set(q(), { strokeDasharray: length });
  return gsap
    .timeline({ default: { ease: 'power2.inOut' } })
    .to(q(`.${styles.mapLine}`), { strokeDashoffset: 0, duration: 5 })
    .fromTo(
      q(`.${styles.buildings} > rect`),
      { opacity: 0, scale: 1.5, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.01, ease: 'back' },
      '<',
    )
    .fromTo(
      q(`.${styles.mapTextContainer} .${styles.header}`),
      { opacity: 0, '--blur': '20px' },
      { opacity: 1, '--blur': '0', duration: 1 },
      '<',
    )
    .fromTo(
      q(`.${styles.mapTextContainer} .${styles.caption}`),
      { opacity: 0, '--blur': '10px' },
      { opacity: 1, '--blur': '0', duration: 1 },
      '<+=0.5',
    );
}
