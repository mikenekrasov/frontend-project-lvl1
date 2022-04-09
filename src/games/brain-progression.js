import engine from '../engine.js';
import getRandomInt from '../helpers/getRandomInt.js';
import arithmeticProgressionGenerator from '../helpers/arithmeticProgressionGenerator.js';

const generateRound = () => {
  const firstArg = getRandomInt(1, 5);
  const difference = getRandomInt(1, 3);
  const range = getRandomInt(6, 10);

  const progression = arithmeticProgressionGenerator(firstArg, difference, range);
  const randomIndex = getRandomInt(0, progression.length - 1);

  const result = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const progressionWithHiddenElement = progression.join(' ');
  return [progressionWithHiddenElement, result];
};

const brainProgression = () => {
  const instructions = 'What number is missing in the progression?';
  engine(instructions, generateRound);
};

export default brainProgression;
