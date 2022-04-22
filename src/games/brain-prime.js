import engine from '../engine.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, result];
};

const brainPrime = () => {
  engine(instruction, generateRound);
};

export default brainPrime;
