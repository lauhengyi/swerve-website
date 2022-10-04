import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function NavbarButton({ text, href }) {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const animationStart = useRef(null);
  const animationEnd = useRef(null);

  useEffect(() => {
    animationStart.current = gsap
      .timeline({ ease: 'power4.inOut', paused: true })
      .fromTo(
        q('p'),
        {
          rotation: 0,
        },
        {
          rotation: 30,
          stagger: {
            amount: 0.2,
          },
          duration: 0.1,
        },
      )
      .fromTo(
        q('span'),
        { width: '0%', xPercent: 0 },
        { width: '100%', xPercent: 0, duration: 0.3, ease: 'linear' },
        '<',
      );

    animationEnd.current = gsap
      .timeline({ ease: 'power4.inOut', paused: true })
      .to(q('p'), {
        rotation: 0,
        stagger: { amount: 0.2 },
        duration: 0.1,
        immediateRender: false,
      })
      .to(
        q('span'),
        {
          xPercent: 100,
          duration: 0.3,
          ease: 'linear',
          immediateRender: false,
        },
        '<',
      );
  });

  const handleOnEnter = () => {
    animationStart.current.restart();
  };

  const handleOnLeave = () => {
    if (animationStart.current.isActive()) {
      animationStart.current.reverse();
    } else {
      animationEnd.current.restart();
    }
  };

  return (
    <li
      ref={el}
      onMouseEnter={() => handleOnEnter()}
      onMouseLeave={() => handleOnLeave()}
    >
      <Link href={href}>
        <a>
          {[...text].map((l, i) => (
            <p key={i}>{l}</p>
          ))}
          <span />
        </a>
      </Link>
    </li>
  );
}
