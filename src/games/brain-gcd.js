import getRandomNumber from '../helpers/getRandomNumber.js';
import getGreatestCommonDivisor from '../helpers/getGreatestCommonDivisor.js';
import engine from '../engine.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const result = String(getGreatestCommonDivisor(number1, number2));
  return [question, result];
};

const brainCalc = () => {
  engine(instruction, generateRound);
};

export default brainCalc;
