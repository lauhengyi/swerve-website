import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import styles from '../styles/Home.module.css';

gsap.registerPlugin(CustomEase);

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
      width: '16vh',
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
    )
    .to(q(`.${styles.balloonScene}`), { visibility: 'hidden', duration: 0 })
    .to(
      q(`.${styles.catalogCoinContainer} .${styles.catalogItem}`),
      {
        keyframes: {
          '0%': { x: '35vw', rotate: '0deg', opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { x: '-35vw', rotate: 360, opacity: 0 },
        },
        stagger: 0.3,
        duration: 2,
        ease: 'power2.inOut',
      },
      '+=0.5',
    )
    .to(
      q(`.${styles.catalogItemContainer} .${styles.catalogItem}`),
      {
        keyframes: {
          '0%': { x: '-35vw', rotate: '0deg', opacity: 0 },
          '30%': { opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { x: '35vw', rotate: 360, opacity: 0 },
        },
        stagger: 0.3,
        duration: 2,
        ease: 'power2.inOut',
      },
      '<+=0.5',
    );

  // Custom ease for the sliding animation
  const slideEase = CustomEase.create(
    'custom',
    'M0,0,C0,0,0.644,0.89,0.644,0.89,0.75,1.038,0.95,1.012,1,1',
  );

  const amountToSlide1 = 150;
  const slideDuration1 = 5;
  const slideDuration2 = 3;
  const amountToSlide2 = amountToSlide1 * (slideDuration2 / slideDuration1);
  const openingDuration = 1.5;
  const openingEase = 'power2.in';
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catalogTransition}`),
      { display: 'none' },
      { display: 'grid', duration: 0 },
    )
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(1)`),
      { y: `-${amountToSlide1}vh` },
      {
        y: `0vh`,
        duration: slideDuration1,
        ease: slideEase,
      },
    )
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(2)`),
      { y: `${amountToSlide1}vh` },
      { y: `0vh`, duration: slideDuration1, ease: slideEase },
      '<',
    )
    .add(mainMovements, '<')
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(1)`),
      { y: `0vh` },
      {
        y: `${amountToSlide2}vh`,
        duration: slideDuration2,
        ease: 'power1.in',
      },
    )
    .fromTo(
      q(`.${styles.catalogRow}:nth-of-type(2)`),
      { y: `0vh` },
      {
        y: `-${amountToSlide2}vh`,
        duration: slideDuration2,
        ease: 'power1.in',
      },
      '<',
    )
    .to(
      q(`.${styles.catalogRowGroup}`),
      {
        width: 'calc(100vw + 20vh)',
        duration: openingDuration,
        ease: openingEase,
      },
      '<+=1',
    )
    .to(
      q(`.${styles.customer}`),
      {
        translateX: '50vw',
        duration: openingDuration,
        ease: openingEase,
      },
      '<',
    )
    .to(
      q(`.${styles.merchant}`),
      {
        translateX: '-50vw',
        duration: openingDuration,
        ease: openingEase,
      },
      '<',
    )
    .to(
      q(`.${styles.catalogTransitionBackground}`),
      {
        '--wipe': '50%',
        duration: openingDuration,
        ease: 'power2.in',
      },
      '<-=0.03',
    )
    .to(q(`.${styles.catalogTransition}`), { display: 'none', duration: 0 });
}
