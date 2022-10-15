import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catelogTransition(q) {
  const amountToSlide = 250;
  const slideDuration = 20;
  // Add all animations that is not the sliding animation to the timeline
  const mainMovements = gsap
    .timeline()
    .to(q(`.${styles.catelogRowGroup}`), { width: '20vh', duration: 3 })
    .to(q(`.${styles.catelogRowGroup}`), { rotate: 0, duration: 3 }, '+=2');
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catelogRow}:nth-of-type(1)`),
      { y: `-${amountToSlide}vh` },
      { y: `${amountToSlide}vh`, duration: slideDuration, ease: 'linear' },
    )
    .fromTo(
      q(`.${styles.catelogRow}:nth-of-type(2)`),
      { y: `${amountToSlide}vh` },
      { y: `-${amountToSlide}vh`, duration: slideDuration, ease: 'linear' },
      '<',
    )
    .add(mainMovements, '<');
}
