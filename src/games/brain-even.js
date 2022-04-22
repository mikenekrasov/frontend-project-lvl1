import getRandomNumber from '../helpers/getRandomNumber.js';
import engine from '../engine.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const brainEven = () => {
  engine(instruction, generateRound);
};

export default brainEven;
