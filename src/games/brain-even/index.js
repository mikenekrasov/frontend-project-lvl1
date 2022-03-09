import getRandomInt from '../../helpers/getRandomInt.js';
import isEven from './isEven.js';
import engine from '../../engine.js';

const brainEven = () => {
  const minimum = 0;
  const maximum = 100;
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';

  const makeRound = () => {
    const randomNumber = getRandomInt(minimum, maximum);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, answer];
  };

  engine(instructions, makeRound);
};

export default brainEven;
