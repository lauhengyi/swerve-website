import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapSceneAnimation(q) {
  console.log(q(`.${styles.buildings} > rect`));
}
