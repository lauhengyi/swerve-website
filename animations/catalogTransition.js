import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catalogTransition(q) {
  const amountToSlide = 250;
  const slideDuration = 20;

  const textCollapsing = gsap
    .timeline()
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      {
        width: '0',
        duration: 3,
        ease: 'back.in',
      },
    )
    .to(
      q(`.${styles.catalogText} p:nth-of-type(1)`),
      {
        padding: '0 3vh',
        duration: 3,
      },
      '<',
    )
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      { height: 'auto', duration: 3, ease: 'back.out' },
    );

  // Add all animations that is not the sliding animation to the timeline
  const mainMovements = gsap
    .timeline()
    // This is to make the text look normal for some reason
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      { width: 'auto', duration: 0 },
    )
    .to(q(`.${styles.catalogRowGroup}`), { width: '20vh', duration: 3 })
    .to(q(`.${styles.catalogText}`), { translateY: '0vh', duration: 3 }, '<')
    .to(
      q(`.${styles.catalogTransitionBackground}`),
      {
        '--wipe': '1%',
        duration: 3,
      },
      '<+=0.3',
    )
    .add(textCollapsing)
    .to(q(`.${styles.catalogRowGroup}`), { rotate: 0, duration: 3 }, '<+2')
    .to(
      q(`.${styles.catalogTransitionBackground}`),
      {
        '--rotate': '90deg',
        duration: 3,
      },
      '<',
    );
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(1)`),
      { y: `-${amountToSlide}vh` },
      { y: `${amountToSlide}vh`, duration: slideDuration, ease: 'linear' },
    )
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(2)`),
      { y: `${amountToSlide}vh` },
      { y: `-${amountToSlide}vh`, duration: slideDuration, ease: 'linear' },
      '<',
    )
    .add(mainMovements, '<');
}
