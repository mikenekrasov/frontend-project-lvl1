import getRandomNumber from '../helpers/getRandomNumber.js';
import isEven from '../helpers/isEven.js';
import engine from '../engine.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const brainEven = () => {
  engine(instruction, generateRound);
};

export default brainEven;
