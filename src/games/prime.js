import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number / 2 + 1; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getData = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = checkPrimeNumber(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

export default () => {
  playGame(gameDescription, getData);
};
