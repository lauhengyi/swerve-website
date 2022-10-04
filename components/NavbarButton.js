import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function NavbarButton({ text, href }) {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = gsap.fromTo(
      q('p'),
      {
        rotation: 0,
      },
      {
        rotation: 45,
        stagger: 0.05,
        duration: 0.1,
        paused: true,
      },
    );
  });

  const handleOnEnter = () => {
    animation.current.play();
  };

  const handleOnLeave = () => {
    animation.current.reverse();
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
        </a>
      </Link>
    </li>
  );
}
