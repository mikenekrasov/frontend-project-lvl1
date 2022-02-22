import readlineSync from 'readline-sync';
import getRandomInt from '../../helpers/getRandomInt.js';
import greetings from '../../helpers/greetings.js';
import getGreatestCommonDivisor from './getGreatestCommonDivisor.js';

const brainCalc = () => {
  const rounds = 3;
  const user = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < rounds; i += 1) {
    const firstArg = getRandomInt(1, 100);
    const secondArg = getRandomInt(1, 100);
    console.log(`Question: ${firstArg} ${secondArg}`);
    const result = getGreatestCommonDivisor(firstArg, secondArg);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainCalc;
