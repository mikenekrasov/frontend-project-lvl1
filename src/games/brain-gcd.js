import getRandomInt from '../helpers/getRandomInt.js';
import getGreatestCommonDivisor from '../helpers/getGreatestCommonDivisor.js';
import engine from '../engine.js';

const generateRound = () => {
  const firstArg = getRandomInt(1, 100);
  const secondArg = getRandomInt(1, 100);
  const question = `Question: ${firstArg} ${secondArg}`;
  const result = String(getGreatestCommonDivisor(firstArg, secondArg));
  return [question, result];
};

const brainCalc = () => {
  const instructions = 'Find the greatest common divisor of given numbers.';

  engine(instructions, generateRound);
};

export default brainCalc;
