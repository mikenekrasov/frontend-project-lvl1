const getCalculation = (operand1, operand2, operator) => {
  let result = null;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return result;
};

export default getCalculation;
