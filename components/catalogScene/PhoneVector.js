import React from 'react';
import styles from '../../styles/Home.module.css';
import CatalogItemVector from './CatalogItemVector';

export default function PhoneVector({ index }) {
  return (
    <div className={styles.catalogPhoneContainer}>
      <div className={styles.catalogPhoneScreen}>
        <CatalogItemVector index={index} />
      </div>
      <svg
        viewBox="0 0 396 657"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.catalogPhone}
      >
        <g className={styles.catalogPhoneFlash}>
          <path
            d="M395.989 45.2614L305.242 96.4325L295.215 71.6845L395.989 45.2614Z"
            fill="#FFF501"
          />
          <path
            d="M377.31 92.2481L299.622 108.053L298.781 81.3645L377.31 92.2481Z"
            fill="#FFF501"
          />
          <path
            d="M337.177 2.99707L307.123 90.7253L277.116 73.6525L337.177 2.99707Z"
            fill="#FFF501"
          />
          <path
            d="M311.384 3.54553L299.608 95.528L266.778 84.8463L311.384 3.54553Z"
            fill="#FFF501"
          />
          <path
            d="M367.037 19.7493L302.528 85.7789L292.086 73.6346L367.037 19.7493Z"
            fill="#FFF501"
          />
        </g>
        <rect y="51.8379" width="327" height="605" rx="34" fill="#282828" />
        <rect
          x="17"
          y="68.8379"
          width="293"
          height="572"
          rx="24"
          fill="#F6F6F6"
        />
        <path
          d="M17 495.838H310V616.838C310 630.093 299.255 640.838 286 640.838H41C27.7452 640.838 17 630.093 17 616.838V495.838Z"
          fill="#787878"
        />
        <circle cx="287.5" cy="91.3379" r="8.5" fill="black" />
        <circle
          className={styles.catalogPhoneButton}
          cx="163"
          cy="568.838"
          r="35"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  );
}
