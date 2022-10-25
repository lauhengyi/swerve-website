import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function catalog2Transition(q) {
  return gsap
    .timeline()
    .fromTo(
      q(`.${styles.catalogTextContainer}`),
      {
        filter: 'blur(0px)',
        opacity: 1,
      },
      {
        filter: 'blur(50px)',
        opacity: 0,
        duration: 1,
      },
    )
    .to(
      q(`.${styles.catalogPanningRow}`),
      {
        bottom: '75%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=0.5',
    )
    .from(
      q(`.${styles.catalogScene} .${styles.catalogItem}`),
      {
        top: '100%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    .fromTo(
      q(`.${styles.catalogPhoneContainer}`),
      {
        top: '100%',
      },
      {
        top: '60%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<+=0.5',
    )
    .to(
      q(`.${styles.catalog2TextContainer}`),
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
      },
      '-=0.5',
    );
}
