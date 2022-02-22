import readlineSync from 'readline-sync';
import getRandomInt from '../../helpers/getRandomInt.js';
import greetings from '../../helpers/greetings.js';
import arithmeticProgressionGenerator from './arithmeticProgressionGenerator.js';

const brainProgression = () => {
  const rounds = 3;
  const user = greetings();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < rounds; i += 1) {
    const firstArg = getRandomInt(1, 5);
    const difference = getRandomInt(1, 3);
    const range = getRandomInt(5, 10);

    const progression = arithmeticProgressionGenerator(firstArg, difference, range);
    const randomIndex = getRandomInt(0, progression.length - 1);
    const hiddenElement = progression[randomIndex];
    progression[randomIndex] = '..';

    console.log(`Question: ${progression}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== hiddenElement) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenElement}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainProgression;
