import getRandomInt from '../helpers/getRandomInt.js';
import isEven from '../helpers/isEven.js';
import engine from '../engine.js';

const generateRound = () => {
  const randomNumber = getRandomInt(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const brainEven = () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(instructions, generateRound);
};

export default brainEven;
