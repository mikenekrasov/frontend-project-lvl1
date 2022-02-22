const getGreatestCommonDivisor = (num1, num2) => {
  let arg1 = num1;
  let arg2 = num2;
  while (arg1 !== 0 && arg2 !== 0) {
    if (arg1 > arg2) {
      arg1 %= arg2;
    } else {
      arg2 %= arg1;
    }
  }
  return arg1 + arg2;
};

export default getGreatestCommonDivisor;
