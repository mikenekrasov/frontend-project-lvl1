import getRandomNumber from '../helpers/getRandomNumber.js';
import getCalculation from '../helpers/getCalculation.js';
import engine from '../engine.js';

const instruction = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const result = String(getCalculation(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, result];
};

const brainCalc = () => {
  engine(instruction, generateRound);
};

export default brainCalc;
