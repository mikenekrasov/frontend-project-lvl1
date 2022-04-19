const getArithmeticProgression = (firstArg, difference, range) => {
  let arg = firstArg;
  let progressionRange = range;
  const progression = [];

  while (progressionRange > 0) {
    progression.push(arg);
    arg += difference;
    progressionRange -= 1;
  }
  return progression;
};

export default getArithmeticProgression;
