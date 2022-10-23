import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catalogSceneAnimation(q) {
  return gsap
    .timeline()
    .to(q(`.${styles.catalogItem}`), {
      keyframes: {
        '0%': { x: '50vw' },
        '20%': { x: '0vw', ease: 'back' },
        '80%': { x: '0vw' },
        '100%': { x: '50vw', ease: 'back.in' },
      },
      duration: 3,
    })
    .to(
      q(`.${styles.catalogItem}`),
      {
        keyframes: {
          '0%': { filter: 'brightness(1)' },
          '10%': { filter: 'brightness(2)' },
          '100%': { filter: 'brightness(1)' },
        },
        duration: 0.5,
      },
      '<+=1',
    )
    .to(
      q(`.${styles.catalogPhoneFlash}`),
      {
        keyframes: {
          '0%': { opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        duration: 0.5,
      },
      '<',
    )
    .to(
      q(`.${styles.catalogPhoneButton}`),
      {
        keyframes: {
          '0%': { r: 35 },
          '10%': { r: 30 },
          '100%': { r: 35 },
        },
        duration: 0.5,
      },
      '<',
    );
}
