import playGame from '../index.js';
import randomNumber from '../utils.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getData = () => {
  const numberQuestion = randomNumber(1, 100);
  const correctAnswer = checkPrimeNumber(numberQuestion) ? 'yes' : 'no';
  return [numberQuestion, correctAnswer];
};

export default () => {
  playGame(question, getData);
};
