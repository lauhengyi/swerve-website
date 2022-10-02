import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapScroll(q) {
  gsap.set(q(), { strokeDasharray: length });
  return gsap
    .timeline({ default: { ease: 'power2.inOut' } })
    .to(q(`.${styles.mapLine}`), { strokeDashoffset: 0, duration: 3 });
}
