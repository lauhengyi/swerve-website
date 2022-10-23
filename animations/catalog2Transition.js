import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catalog2Transition(q) {
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catalogTextContainer}`),
      {
        '--blur': '0px',
        opacity: 1,
      },
      {
        '--blur': '50px',
        opacity: 0,
        duration: 1,
      },
    )
    .to(q(`.${styles.catalogPanningRow}`), {
      bottom: '75%',
      duration: 1,
      ease: 'power2.inOut',
    });
}
