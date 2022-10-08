import gsap from 'gsap';
import styles from '../styles/Home.module.css';

export default function mapSceneAnimation(q) {
  const buildings = q(`.${styles.buildings} > rect`);
  const droppers = q(`.${styles.dropper}`);
  const isAnimating = Array(buildings.length).fill(false);
  console.log('called');

  return setInterval(() => {
    let index = Math.floor(Math.random() * buildings.length);
    // If the building is already animating, find another one
    if (isAnimating[index]) return;
    // If there is no more droppers, wait for the next interval
    if (droppers.length === 0) return;

    const building = buildings[index];
    const dropper = droppers.pop();
    isAnimating[index] = true;

    const buildingWidth = building.attributes.width.value;
    const buildingHeight = building.attributes.height.value;
    console.log({ buildingWidth, buildingHeight });
    const dropperX =
      parseInt(building.attributes.x.value) - 33.5 + buildingWidth / 2;
    const dropperY =
      parseInt(building.attributes.y.value) - 94 + buildingHeight / 2;

    gsap
      .timeline({ delay: gsap.utils.random(0, 2) })
      .to(building, {
        fill: '#ff3d00',
        duration: 1,
      })
      .fromTo(
        dropper,
        {
          attr: {
            x: dropperX,
            y: dropperY - 50,
          },
          opacity: 0,
        },
        {
          attr: {
            y: dropperY,
          },
          opacity: 1,
          duration: 1,
        },
        '<',
      )

      .to(building, {
        fill: '#d9d9d9',
        duration: 1,
        delay: gsap.utils.random(1, 6),
        onComplete: () => {
          isAnimating[index] = false;
        },
      })
      .to(
        dropper,
        {
          attr: {
            y: dropperY,
          },
          opacity: 0,
          duration: 1,
          onComplete: () => {
            droppers.push(dropper);
          },
        },
        '<',
      );
    console.log('work');
  }, 500);
}
