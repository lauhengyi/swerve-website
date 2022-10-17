import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catelogTransition(q) {
  const amountToSlide = 250;
  const slideDuration = 20;

  const textCollapsing = gsap
    .timeline()
    .to(
      q(`.${styles.catelogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      {
        width: '0',
        duration: 3,
        ease: 'back.in',
      },
    )
    .to(
      q(`.${styles.catelogText} p:nth-of-type(1)`),
      {
        paddingRight: '3vh',
        duration: 3,
      },
      '<',
    );

  // Add all animations that is not the sliding animation to the timeline
  const mainMovements = gsap
    .timeline()
    .to(q(`.${styles.catelogRowGroup}`), { width: '20vh', duration: 3 })
    .to(q(`.${styles.catelogText}`), { translateY: '0vh', duration: 3 }, '<')
    .to(
      q(`.${styles.catelogTransitionBackground}`),
      {
        '--wipe': '1%',
        duration: 3,
      },
      '<+=0.3',
    )
    .add(textCollapsing)
    .to(q(`.${styles.catelogRowGroup}`), { rotate: 0, duration: 3 }, '<+2')
    .to(
      q(`.${styles.catelogTransitionBackground}`),
      {
        '--rotate': '90deg',
        duration: 3,
      },
      '<',
    );
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
