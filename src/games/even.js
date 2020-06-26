import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const parityCheck = (number) => number % 2 === 0;

const getData = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = parityCheck(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getData);
};
