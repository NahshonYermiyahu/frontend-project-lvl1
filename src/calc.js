import readlineSync from 'readline-sync';

function getQuestion() {
  const firstNum = Math.ceil(Math.random() * 100);
  const secondNum = Math.ceil(Math.random() * 100);
  let operator = '';
  const expr = Math.floor(Math.random() * Math.floor(3));

  switch (expr) {
    case 0 :
      operator = '+';
      break;
    case 1 :
      operator = '-';
      break;
    case 2 :
      operator = '*';
      break;
    default:
      operator = '+';
  }

  return `${firstNum} ${operator} ${secondNum}`;
}

export default () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);
  console.log('What is the result of the expression?');
  console.log(`Question: ${getQuestion()}`)
}
