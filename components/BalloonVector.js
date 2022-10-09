import React from 'react';
import styles from '../styles/Home.module.css';

export default function BalloonVector({ text }) {
  const colors = ['C2FB1F', 'FF764A', '6DE5FF', 'C21FFB', '581FFB', 'FBF21F'];
  const index = Math.floor(Math.random() * colors.length);
  const fill = `#${colors[index]}`;
  return (
    <svg
      className={styles.balloonVector}
      width="223"
      height="571"
      viewBox="0 0 223 571"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116.427 292.968C105.193 320.41 88.5754 389.24 111.976 445.03C135.376 500.82 123.143 551.589 114.101 570"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M1.18347e-05 111.317C1.722e-05 49.8381 49.9203 -6.80301e-05 111.5 -6.26573e-05C173.08 -5.72845e-05 223 49.8381 223 111.317C223 172.795 173.08 292.693 111.5 292.693C49.9202 292.693 6.44944e-06 172.795 1.18347e-05 111.317Z"
        fill={fill}
      />

      <path
        d="M109.736 285.829C110.928 284.501 113.009 284.501 114.201 285.829L125.734 298.677C127.468 300.608 126.097 303.681 123.502 303.681H100.435C97.8399 303.681 96.4691 300.608 98.2029 298.677L109.736 285.829Z"
        fill={fill}
      />
      <text x="15" y="150" fill="black" className={styles.balloonVectorText}>
        {text}
      </text>
    </svg>
  );
}
