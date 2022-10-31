import gsap from 'gsap';
import styles from '../styles/Navigation.module.css';

export default function navbarToBlack(q) {
  return gsap.timeline().to(q(`:not(.${styles.menu}) > .${styles.navbar}`), {
    '--nav-color': '#452e2e',
    duration: 1,
  });
}
