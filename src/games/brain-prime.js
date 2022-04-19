import engine from '../engine.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import isPrime from '../helpers/isPrime.js';

const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, result];
};

const brainPrime = () => {
  engine(instructions, generateRound);
};

export default brainPrime;
