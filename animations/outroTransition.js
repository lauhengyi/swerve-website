import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function outroTransition(q) {
  return gsap
    .timeline()
    .to(q(`.${styles.catalog2TextContainer}`), {
      filter: 'blur(50px)',
      opacity: 0,
      duration: 1,
    })
    .to(q(`.${styles.catalogPanningRow}`), {
      bottom: '150%',
      duration: 1,
    })
    .to(
      q(`.${styles.catalogPhoneContainer}`),
      {
        top: '100%',
        duration: 1,
      },
      '-=0.5',
    )
    .to(
      q(`.${styles.catalogScene} .${styles.catalogItem}`),
      {
        top: '100%',
        duration: 1,
      },
      '<',
    )
    .to(q(`.${styles.catalogScene}`), {
      visibility: 'hidden',
      duration: 0,
    })
    .fromTo(
      q(`.${styles.outroScene} .${styles.header}`),
      {
        filter: 'blur(50px)',
        opacity: 0,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
      },
    )
    .fromTo(
      q(`.${styles.outroScene} .${styles.navigation} li`),
      {
        filter: 'blur(20px)',
        opacity: 0,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        stagger: 0.5,
        duration: 1,
      },
    )
    .fromTo(
      q(`.${styles.outroScene} .${styles.promptText}`),
      {
        filter: 'blur(20px)',
        opacity: 0,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
      },
    )
    .from(
      q(`.${styles.outroScene} .orb`),
      {
        scale: 0,
        duration: 1,
        stagger: 0.5,
        ease: 'back',
      },
      '-=3',
    );
}
