import engine from '../engine.js';
import getRandomInt from '../helpers/getRandomInt.js';
import isPrime from '../helpers/isPrime.js';

const generateRound = () => {
  const randomInt = getRandomInt(0, 100);
  const result = isPrime(randomInt) ? 'yes' : 'no';
  return [randomInt, result];
};

const brainPrime = () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  engine(instructions, generateRound);
};

export default brainPrime;
