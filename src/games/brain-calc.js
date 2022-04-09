import getRandomInt from '../helpers/getRandomInt.js';
import getCalculation from '../helpers/getCalculation.js';
import engine from '../engine.js';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const firstArg = getRandomInt(1, 100);
  const secondArg = getRandomInt(1, 100);
  const randomOperatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const result = String(getCalculation(firstArg, secondArg, operator));
  const question = `Question: ${firstArg} ${operator} ${secondArg}`;
  return [question, result];
};

const brainCalc = () => {
  const instructions = 'What is the result of the expression?';
  engine(instructions, generateRound);
};

export default brainCalc;
