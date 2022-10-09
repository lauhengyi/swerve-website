import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function balloonSceneAnimation(q) {
  console.log('Running balloonSceneAnimation');
  const balloons = q(
    `.${styles.balloonHoldingContainer} .${styles.balloonVector}`,
  );
  const isAnimating = Array(balloons.length).fill(false);
  return setInterval(() => {
    const index = Math.floor(Math.random() * balloons.length);
    // If the balloon is already animating, find another one
    if (isAnimating[index]) return;
    isAnimating[index] = true;
    const balloon = balloons[index];

    gsap.fromTo(
      balloon,
      { y: '100vh', xPercent: gsap.utils.random(-30, 30), yPercent: 0 },
      {
        y: '0vh',
        xPercent: gsap.utils.random(-30, 30),
        yPercent: -100,
        duration: gsap.utils.random(3, 8),
        onComplete: () => {
          isAnimating[index] = false;
        },
        ease: 'linear',
      },
    );
  }, 1000);
}
