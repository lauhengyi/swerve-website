import React, { useEffect, useRef } from 'react';
import styles from '../../styles/About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MemberHeader({ name, title }) {
  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);

    const headerSlide = gsap
      .timeline({
        scrollTrigger: {
          trigger: el.current,
        },
      })
      .fromTo(
        q(`.${styles.memberName}`),
        { x: '-20vw', opacity: 0 },
        { x: '0', opacity: 1, duration: 1, ease: 'power1.inOut' },
      )
      .fromTo(
        q(`.${styles.memberTitle}`),
        { x: '20vw', opacity: 0 },
        { x: '0', opacity: 1, duration: 1, ease: 'power1.inOut' },
        '<',
      );

    return () => {
      headerSlide.kill();
    };
  });

  return (
    <div ref={el} className={styles.memberHeaderContainer}>
      <h2 className={styles.memberName}>{name}</h2>
      <h3 className={styles.memberTitle}>{title}</h3>
    </div>
  );
}
