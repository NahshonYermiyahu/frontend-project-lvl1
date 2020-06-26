import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getData = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  // getting an operator for a question and
  // calculating the result of an operation for checking
  const index = randomNumber(0, operators.length - 1);
  const correctAnswer = calculate(operators[index], number1, number2);
  const task = `${number1} ${operators[index]} ${number2}`;

  return [task, correctAnswer.toString()];
};

export default () => {
  playGame(gameDescription, getData);
};
