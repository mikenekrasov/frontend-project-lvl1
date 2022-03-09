import getRandomInt from '../../helpers/getRandomInt.js';
import getCalculation from './getCalculation.js';
import engine from '../../engine.js';

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const start = 0;
  const end = operators.length - 1;
  const instructions = 'What is the result of the expression?';

  const makeRound = () => {
    const firstArg = getRandomInt(1, 100);
    const secondArg = getRandomInt(1, 100);
    const randomOperatorIndex = getRandomInt(start, end);
    const operator = operators[randomOperatorIndex];
    const result = String(getCalculation(firstArg, secondArg, operator));
    const question = `Question: ${firstArg} ${operator} ${secondArg}`;
    return [question, result];
  };

  engine(instructions, makeRound);
};

export default brainCalc;
