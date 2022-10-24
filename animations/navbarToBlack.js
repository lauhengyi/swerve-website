import gsap from 'gsap';
import styles from '../styles/Navbar.module.css';

export default function navbarToBlack(q) {
  return gsap.timeline().to(q(`.${styles.navigation}`), {
    '--nav-color': '#452e2e',
    duration: 1,
  });
}
