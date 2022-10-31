import gsap from 'gsap';
import styles from '../styles/Navigation.module.css';

export default function navbarToWhite(q) {
  return gsap.timeline().to(q(`.${styles.navigation}`), {
    '--nav-color': '#f6f6f6',
    duration: 1,
  });
}
