import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getMaxDivisor(number2, number1 % number2);
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
