import gsap from 'gsap';
import styles from '../styles/Home.module.css';
import mapSceneAnimation from './mapSceneAnimation';

export default function mapScroll(q) {
  return gsap
    .timeline({
      default: { ease: 'power2.inOut' },
      onComplete: () => mapSceneAnimation(q),
    })
    .to(q(`.${styles.mapLine}`), { strokeDashoffset: 0, duration: 5 })
    .fromTo(
      q(`.${styles.buildings} > rect`),
      { opacity: 0, scale: 1.5, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: { amount: 4.5 },
        ease: 'back',
      },
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
