import { randNum } from './randNum';

export const createDefaultKeyframes = () => {
  const x = Math.random() * 100;
  const y = randNum(-5, 5);
  const offset = randNum(-15, 15);


  return <Keyframe[]>[
    {
      transform: `translate(${x - offset}vw, ${y}vh)`,
      opacity: 1,
    },
    {
      transform:  `translate(${x + offset}vw, 100vh)`,
      opacity: 1,
    }
  ]
}

export const createDefaultOptions = () => {
  const delay = randNum(0, 30) * (-1);
  const duration = randNum(10, 30);

  return <KeyframeAnimationOptions>{
    duration: duration * 1000,
    delay: delay * 1000,
    iterations: Infinity,
  }
}

export const createAnotherKeyframes = () => {
  const x = Math.random() * 100;
  const y = randNum(0, 95);
  const offset = randNum(-15, 15);

  return <Keyframe[]>[
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
}

export const createAnotherOptions = () => {
  return <KeyframeAnimationOptions>{
    duration: randNum(2, 4) * 1000,
    delay: randNum(0, 3) * 1000,
    iterations: Infinity,
  }
}

export const createAnimation = (element: HTMLElement, Keyframes: Keyframe[], options: KeyframeAnimationOptions): Animation => {
  return element.animate(Keyframes, options);
}
