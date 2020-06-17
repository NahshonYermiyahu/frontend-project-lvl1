import main from './main.js';

function getData() {
  // getting numbers for a question
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  let operator = '';
  let total = 0;
  const result = [];

  // getting an operator for a question and
  // calculating the result of an operation for checking
  const expr = Math.floor(Math.random() * Math.floor(3));

  switch (expr) {
    case 0:
      operator = '+';
      total = num1 + num2;
      break;
    case 1:
      operator = '-';
      total = num1 - num2;
      break;
    case 2:
      operator = '*';
      total = num1 * num2;
      break;
    default:
      operator = '+';
      total = num1 + num2;
  }
  result.push(total);
  result.push(`${num1} ${operator} ${num2}`);
  return result;
}

export default () => {
  console.log('What is the result of the expression?');
  return main(getData);
};
