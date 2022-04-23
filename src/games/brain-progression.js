import engine from '../engine.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const instruction = 'What number is missing in the progression?';

const getArithmeticProgression = (firstArg, difference, range) => {
  let arg = firstArg;
  let progressionRange = range;
  const progression = [];

  for (let i = 0; i < progressionRange; progressionRange -= 1) {
    progression.push(arg);
    arg += difference;
  }
  return progression;
};

const generateRound = () => {
  const number = getRandomNumber(1, 5);
  const step = getRandomNumber(1, 5);
  const range = getRandomNumber(6, 10);

  const progression = getArithmeticProgression(number, step, range);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);

  const result = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const progressionWithHiddenElement = progression.join(' ');
  return [progressionWithHiddenElement, result];
};

const brainProgression = () => {
  engine(instruction, generateRound);
};

export default brainProgression;
