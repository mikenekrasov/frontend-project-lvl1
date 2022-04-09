import readlineSync from 'readline-sync';

const rounds = 3;

const engine = (instructions, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(instructions);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const input = readlineSync.question('Your answer: ');

    if (answer !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
