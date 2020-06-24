import playGame from '../index.js';
import randomNumber from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

function getMaxDivisor(size, number1, number2) {
  let result = 0;

  for (let i = 1; i < size + 1; i += 1) {
    if (Number.isInteger(number1 / i) && Number.isInteger(number2 / i)) {
      result = i > result ? i : result;
    }
  }

  return result;
}

const getData = () => {
  const question1 = randomNumber(1, 100);
  const question2 = randomNumber(1, 100);
  const sizeMin = question1 < question2 ? question1 : question2;
  const correctAnswer = getMaxDivisor(sizeMin, question1, question2);
  const questionNumbers = `${question1} ${question2}`;

  return [questionNumbers, correctAnswer];
};

export default () => {
  playGame(question, getData);
};
