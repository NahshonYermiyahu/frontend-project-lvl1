import check from './check.js';

function getQuestion() {
  // getting numbers for a question
  const firstNum = Math.ceil(Math.random() * 100);
  const secondNum = Math.ceil(Math.random() * 100);
  const result = [];
  const length = firstNum < secondNum ? firstNum : secondNum;
  let divisorMax = 0;

  // getting maximum divisor for checking
  for (let i = 1; i < length + 1; i += 1) {
    if (Number.isInteger(firstNum / i) && Number.isInteger(secondNum / i)) {
      divisorMax = i > divisorMax ? i : divisorMax;
    }
  }
  result.push(divisorMax);
  result.push(`${firstNum} ${secondNum}`);
  return result;
}

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  let result = true;

  // transmission of the question and verification of the answer
  for (let i = 0; i < 3; i += 1) {
    const resultGetQuestion = getQuestion();

    if (!check(resultGetQuestion)) {
      result = false;
      break;
    }
  }
  return result;
};
