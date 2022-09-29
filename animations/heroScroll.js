import gsap from 'gsap';
import styles from '../styles/Home.module.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function heroScroll(q) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: q(`.${styles.hero}`),
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '1000',
      },
      defaults: { ease: 'power2.inOut' },
    })
    .to(q(`.${styles.circle}`), {
      '--clip': '150vh',
      duration: 1,
    })
    .to(q(`.${styles.title}`), { yPercent: -200, duration: 1.5, scale: 2 }, '<')
    .from(
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
