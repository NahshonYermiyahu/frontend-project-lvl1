import loopCheck from '../loopСheck.js';

function getQuestion() {
  // getting numbers for a question
  const firstNum = Math.ceil(Math.random() * 100);
  const secondNum = Math.ceil(Math.random() * 100);
  let operator = '';
  let total = 0;
  const result = [];

  // getting an operator for a question and
  // calculating the result of an operation for checking
  const expr = Math.floor(Math.random() * Math.floor(3));

  switch (expr) {
    case 0:
      operator = '+';
      total = firstNum + secondNum;
      break;
    case 1:
      operator = '-';
      total = firstNum - secondNum;
      break;
    case 2:
      operator = '*';
      total = firstNum * secondNum;
      break;
    default:
      operator = '+';
      total = firstNum + secondNum;
  }
  result.push(total);
  result.push(`${firstNum} ${operator} ${secondNum}`);
  return result;
}

export default () => {
  console.log('What is the result of the expression?');
  return loopCheck(getQuestion);
};
