import getRandomNumber from '../helpers/getRandomNumber.js';
import getCalculation from '../helpers/getCalculation.js';
import engine from '../engine.js';

const instructions = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const firstArg = getRandomNumber(1, 100);
  const secondArg = getRandomNumber(1, 100);
  const randomOperatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const result = String(getCalculation(firstArg, secondArg, operator));
  const question = `${firstArg} ${operator} ${secondArg}`;
  return [question, result];
};

const brainCalc = () => {
  engine(instructions, generateRound);
};

export default brainCalc;
