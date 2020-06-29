import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (number1, number2) => {
  let maxDivisor;
  const min = Math.min(number1, number2);

  for (let i = 1; i < min + 1; i += 1) {
    if (Number.isInteger(number1 / i) && Number.isInteger(number2 / i)) {
      maxDivisor = i;
    }
  }

  return maxDivisor;
};

const getData = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const correctAnswer = getMaxDivisor(number1, number2);
  const task = `${number1} ${number2}`;

  return [task, correctAnswer.toString()];
};

export default () => {
  playGame(gameDescription, getData);
};
