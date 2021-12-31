import { randNum } from './randNum';

const createDefaultAnimation = (element: HTMLDivElement, speed: number) => {
  const x = Math.random() * 100;
  const y = randNum(-5, 5);
  const offset = randNum(-15, 15);

  const delay = randNum(0, 30) * (-1);
  const duration = randNum(10, 30);

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

  animation.playbackRate = speed / 10;

  return animation;
}

const createAnotherAnimation = (element: HTMLDivElement, speed: number) => {
  const x = Math.random() * 100;
  const y = randNum(0, 95);
  const offset = randNum(-15, 15);

  const keyframes = [
    {
      opacity:  0,
      transform: `translate(${x}vw, ${y}vh)`,
    },
    {
      opacity: 1,
      transform: `translate(${x + offset / 2}vw, ${y + 2.5}vh)`,
    },
    {
      opacity: 0,
      transform: `translate(${x + offset}vw, ${y + 5}vh)`,
    }
  ]

  const animation = element.animate(keyframes, {
    duration: randNum(2, 4) * 1000,
    delay: randNum(0, 3) * 1000,
    iterations: Infinity,
  });

  animation.playbackRate = speed / 10;

  return animation;
}

type Style = 0 | 1;

export const createAnimation = (element: HTMLDivElement, speed: number, style: Style = 0) => {

  return style === 0 ? createDefaultAnimation(element, speed) : createAnotherAnimation(element, speed);

}