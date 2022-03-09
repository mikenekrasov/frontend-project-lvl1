import readlineSync from 'readline-sync';
import engine from '../../engine.js';
import getRandomInt from '../../helpers/getRandomInt.js';
import arithmeticProgressionGenerator from './arithmeticProgressionGenerator.js';

const brainProgression = () => {
  const instructions = 'What number is missing in the progression?';

  const makeRound = () => {
    const firstArg = getRandomInt(1, 5);
    const difference = getRandomInt(1, 3);
    const range = getRandomInt(6, 10);

    const progression = arithmeticProgressionGenerator(firstArg, difference, range);
    const randomIndex = getRandomInt(0, progression.length - 1);

    progression[randomIndex] = '..';
    const progressionWithHiddenElement = progression.join(' ');
    const question = `Question: ${progressionWithHiddenElement}`;
    const result = Number(readlineSync.question('Your answer: '));
    return [question, result];
  };

  engine(instructions, makeRound);
};

export default brainProgression;
