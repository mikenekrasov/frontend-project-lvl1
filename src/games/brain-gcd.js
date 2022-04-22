import getRandomNumber from '../helpers/getRandomNumber.js';
import getGreatestCommonDivisor from '../helpers/getGreatestCommonDivisor.js';
import engine from '../engine.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstArg = getRandomNumber(1, 100);
  const secondArg = getRandomNumber(1, 100);
  const question = `${firstArg} ${secondArg}`;
  const result = String(getGreatestCommonDivisor(firstArg, secondArg));
  return [question, result];
};

const brainCalc = () => {
  engine(instruction, generateRound);
};

export default brainCalc;
