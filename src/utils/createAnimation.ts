import { randNum } from './randNum';

export const createAnimation = (element: HTMLDivElement, speed: number) => {

  const x = Math.random() * 100;
  const y = randNum(-5, 5);
  const offset = randNum(-15, 15);

  const delay = randNum(0, 30) * (-1);
  const duration = randNum(10, 30) / speed;

  const keyframes = [
    {
      transform: `translate(${x - offset}vw, ${y}vh)`,
      opacity: 1,
    },
    {
      transform:  `translate(${x + offset}vw, 100vh)`,
      opacity: 1,
    }
  ]

  const animation = element.animate(keyframes, {
    duration: duration * 1000,
    delay: delay * 1000,
    iterations: Infinity,
  });

  return animation;

}