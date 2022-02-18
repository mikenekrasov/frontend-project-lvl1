import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import isEven from './isEven.js';

const brainEven = () => {
  const rounds = 3;
  const minimun = 0;
  const maximum = 100;

  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInt(minimun, maximum);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainEven;
