import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import styles from '../styles/Home.module.css';

export default function catalogTransition(q) {
  const collapsingDuration = 1;
  const textCollapsing = gsap
    .timeline()
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      {
        width: '0',
        duration: collapsingDuration,
        ease: 'back.in',
      },
    )
    .to(
      q(`.${styles.catalogText} p:nth-of-type(1)`),
      {
        padding: '0 3vh 0 0',
        duration: collapsingDuration,
        ease: 'power4.in',
      },
      '<',
    )
    .to(q(`.${styles.catalogText}`), { flexDirection: 'column', duration: 0 })
    .to(q(`.${styles.catalogText}`), {
      fontSize: '10vh',
      duration: 0.5,
    })
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      { height: '10vh', duration: collapsingDuration },
    );

  // Add all animations that is not the sliding animation to the timeline
  const closingDuration = 1.5;
  const rotatingDuration = 1;
  const mainMovements = gsap
    .timeline()
    // This is to make the text look normal for some reason
    .to(
      q(`.${styles.catalogText} p:not(:nth-of-type(1)):not(.${styles.anchor})`),
      { width: 'auto', duration: 0 },
    )
    .to(q(`.${styles.catalogRowGroup}`), {
      width: '20vh',
      duration: closingDuration,
    })
    .to(
      q(`.${styles.catalogText}`),
      { translateY: '0vh', duration: closingDuration },
      '<',
    )
    .to(
      q(`.${styles.catalogTransitionBackground}`),
      {
        '--wipe': '1%',
        duration: closingDuration,
      },
      '<+0.1',
    )
    .add(textCollapsing)
    .to(
      q(`.${styles.catalogRowGroup}`),
      { rotate: 0, duration: rotatingDuration, ease: 'power4.inOut' },
      '<+0.5',
    )
    .to(
      q(`.${styles.catalogTransitionBackground}`),
      {
        '--rotate': '90deg',
        duration: rotatingDuration,
        ease: 'power4.inOut',
      },
      '<',
    );

  // Custom ease for the sliding animation
  const slideEase = CustomEase.create(
    'custom',
    'M0,0,C0,0,0.644,0.89,0.644,0.89,0.75,1.038,0.95,1.012,1,1',
  );

  const amountToSlide = 150;
  const slideDuration = 5;
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(1)`),
      { y: `-${amountToSlide}vh` },
      {
        y: `${amountToSlide}vh`,
        duration: slideDuration,
        ease: slideEase,
      },
    )
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(2)`),
      { y: `${amountToSlide}vh` },
      { y: `-${amountToSlide}vh`, duration: slideDuration, ease: slideEase },
      '<',
    )
    .add(mainMovements, '<');
}
