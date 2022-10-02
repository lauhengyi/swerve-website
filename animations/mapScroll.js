import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapScroll(q) {
  gsap.set(q(), { strokeDasharray: length });
  return gsap
    .timeline({ default: { ease: 'power2.in' } })
    .to(q(`.${styles.mapLine}`), { strokeDashoffset: 0, duration: 5 })
    .fromTo(
      q(`.${styles.buildings} > rect`),
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.01, ease: 'back' },
      '<',
    );
}
