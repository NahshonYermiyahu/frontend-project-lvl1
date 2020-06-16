import check from './check.js';

function getQuestion() {
  const firstNum = Math.ceil(Math.random() * 100);
  const secondNum = Math.ceil(Math.random() * 100);
  let operator = '';
  let total = 0;
  const result = [];
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
  let result = false;

  for (let i = 0; i < 3; i += 1) {
    const resultGetQuestion = getQuestion();

    if (!check(resultGetQuestion)) {
      break;
    }

    if (i === 2) {
      result = true;
    }
  }
  return result;
};
