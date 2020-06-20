import main from '../main.js';
import randomNumber from '../utils.js';

const getData = () => {
  const numForQuestion1 = randomNumber(100);
  const numForQuestion2 = randomNumber(100);
  let operatorForQuestion = '';
  let answer = 0;

  // getting an operator for a question and
  // calculating the result of an operation for checking
  const expr = Math.floor(Math.random() * Math.floor(3));

  switch (expr) {
    case 0:
      operatorForQuestion = '+';
      answer = numForQuestion1 + numForQuestion2;
      break;
    case 1:
      operatorForQuestion = '-';
      answer = numForQuestion1 - numForQuestion2;
      break;
    case 2:
      operatorForQuestion = '*';
      answer = numForQuestion1 * numForQuestion2;
      break;
    default:
      operatorForQuestion = '+';
      answer = numForQuestion1 + numForQuestion2;
  }

  return [answer, `${numForQuestion1} ${operatorForQuestion} ${numForQuestion2}`];
};

export default () => {
  const question = 'What is the result of the expression?';
  main(getData, question);
};
