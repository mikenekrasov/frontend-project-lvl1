import engine from '../../engine.js';
import getRandomInt from '../../helpers/getRandomInt.js';
import isPrime from './isPrime.js';

const brainPrime = () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const makeRound = () => {
    const randomInt = getRandomInt(0, 100);
    const result = isPrime(randomInt) ? 'yes' : 'no';
    return [randomInt, result];
  };
  engine(instructions, makeRound);
};

export default brainPrime;
