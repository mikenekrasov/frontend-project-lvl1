const getGreatestCommonDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};

export default getGreatestCommonDivisor;
