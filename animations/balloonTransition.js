import gsap from 'gsap';
import styles from '../styles/Home.module.css';
import balloonSceneAnimation from './balloonSceneAnimation';

export default function balloonTransition(q) {
  let balloonSceneAnimationID = null;

  const runAnimation = () => {
    if (balloonSceneAnimationID === null) {
      balloonSceneAnimationID = balloonSceneAnimation(q);
    }
  };
  const stopAnimation = () => {
    clearInterval(balloonSceneAnimationID);
    balloonSceneAnimationID = null;
  };

  return gsap
    .timeline({
      onComplete: runAnimation,
      onReverseComplete: stopAnimation,
    })
    .fromTo(
      q(`.${styles.transitionContainer} .${styles.balloonVector}`),
      { y: '100vh', yPercent: 0 },
      {
        y: '0vh',
        yPercent: -100,
        duration: 1,
        stagger: 0.1,
      },
    )
    .fromTo(
      q(`.${styles.mapScene}`),
      { '--wipe': '0%' },
      { '--wipe': '100%', duration: 0.3, ease: 'linear' },
      '<+=1.8',
    );
}
