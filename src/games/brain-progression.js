import engine from '../engine.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getArithmeticProgression from '../helpers/getArithmeticProgression.js';

const instruction = 'What number is missing in the progression?';

const generateRound = () => {
  const firstArg = getRandomNumber(1, 5);
  const step = getRandomNumber(1, 5);
  const range = getRandomNumber(6, 10);

  const progression = getArithmeticProgression(firstArg, step, range);
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
