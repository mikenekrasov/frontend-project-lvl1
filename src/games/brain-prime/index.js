import readlineSync from 'readline-sync';
import getRandomInt from '../../helpers/getRandomInt.js';
import greetings from '../../helpers/greetings.js';
import yesNoAnswer from '../../helpers/yesNoAnswer.js';
import isPrime from './isPrime.js';

const brainProgression = () => {
  const rounds = 3;
  const user = greetings();
  yesNoAnswer();
  for (let i = 0; i < rounds; i += 1) {
    const randomInt = getRandomInt(0, 100);
    const result = isPrime(randomInt);

    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainProgression;
