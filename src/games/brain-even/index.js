import readlineSync from 'readline-sync';
import getRandomInt from '../../helpers/getRandomInt.js';
import isEven from './isEven.js';
import greetings from '../../helpers/greetings.js';
import yesNoAnswer from '../../helpers/yesNoAnswer.js';

const brainEven = () => {
  const rounds = 3;
  const minimum = 0;
  const maximum = 100;

  const user = greetings();
  yesNoAnswer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInt(minimum, maximum);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainEven;
