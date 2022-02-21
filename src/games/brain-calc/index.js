import readlineSync from 'readline-sync';
import getRandomInt from '../../helpers/getRandomInt.js';
import getCalculation from './getCalculation.js';
import greetings from '../../helpers/greetings.js';

const brainCalc = () => {
  const rounds = 3;
  const operators = ['+', '-', '*'];
  const start = 0;
  const end = operators.length - 1;
  const user = greetings();
  console.log('What is the result of the expression?');
  for (let i = 0; i < rounds; i += 1) {
    const firstArg = getRandomInt(1, 100);
    const secondArg = getRandomInt(1, 100);

    const randomOperatorIndex = getRandomInt(start, end);
    const operator = operators[randomOperatorIndex];
    const result = getCalculation(firstArg, secondArg, operator);

    console.log(`Question: ${firstArg} ${operator} ${secondArg}`);
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
