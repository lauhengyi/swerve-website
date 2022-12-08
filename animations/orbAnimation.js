import gsap from 'gsap';

export default function orbAnimation(q) {
  const orbPulsatingAnimation = gsap
    .timeline({
      paused: true,
      defaults: {
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        ease: 'power1.inOut',
      },
    })
    .to(q('.orb'), {
      scale: 'random(0.9, 1.1)',
      duration: 'random(3s, 6s)',
    })
    .to(
      q('.orb'),
      {
        rotate: 'random(-30, 30)',
        duration: 'random(2s, 5s)',
      },
      '<',
    )
    .to(
      q(`.orb`),
      {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        duration: 'random(2s, 4s)',
      },
      '<',
    );

  const orbPopAnimation = gsap.timeline({ delay: 0.5 }).from(q(`.orb`), {
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'back',
    onComplete: () => orbPulsatingAnimation.play(),
  });

  return () => {
    orbPulsatingAnimation.revert();
    orbPopAnimation.revert();
  };
}
