import readlineSync from 'readline-sync';

const rounds = 3;

const engine = (instructions, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}`);
  console.log(instructions);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = makeRound();
    console.log(`Question: ${question}`);
    const result = readlineSync.question('Your answer: ');

    if (answer !== result) {
      console.log(`'${result}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${user}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};

export default engine;
