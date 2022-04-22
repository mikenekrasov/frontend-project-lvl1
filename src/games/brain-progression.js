import engine from '../engine.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const instruction = 'What number is missing in the progression?';

const getArithmeticProgression = (firstArg, difference, range) => {
  let arg = firstArg;
  let progressionRange = range;
  const progression = [];

  while (progressionRange > 0) {
    progression.push(arg);
    arg += difference;
    progressionRange -= 1;
  }
  return progression;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 5);
  const step = getRandomNumber(1, 5);
  const range = getRandomNumber(6, 10);

  const progression = getArithmeticProgression(number1, step, range);
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
