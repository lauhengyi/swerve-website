import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function heroScroll(q) {
  return gsap
    .timeline({
      defaults: { ease: 'power2.inOut' },
    })
    .to(q(`.${styles.circle}`), {
      '--clip': '200vh',
      duration: 1,
    })
    .to(q(`.${styles.title}`), { yPercent: -200, duration: 1.5, scale: 2 }, '<')
    .to(
      q(`.${styles.displayPhone}`),
      { yPercent: -300, duration: 1.5, stagger: 0.1 },
      '<',
    )
    .to(
      q(`.${styles.caption}`),
      { '--blur': '10px', opacity: 0, duration: 1.5 },
      '<',
    );
}
