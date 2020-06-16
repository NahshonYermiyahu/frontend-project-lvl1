import readlineSync from 'readline-sync';

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
  let result = false;
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const resultGetQuestion = getQuestion();
    console.log(`Question: ${resultGetQuestion[1]}`);
    const answer = readlineSync.question('Your answer:');

    if (+answer === resultGetQuestion[0]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultGetQuestion[0]}.`);
      break;
    }

    if (i === 2) {
      result = true;
    }
  }
  return result;
};
