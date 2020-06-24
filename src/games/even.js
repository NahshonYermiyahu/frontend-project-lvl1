import playGame from '../index.js';
import randomNumber from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no"';

const parityCheck = (number) => number % 2 === 0;

const getData = () => {
  const numberQuestion = randomNumber(1, 100);
  const correctAnswer = parityCheck(numberQuestion) ? 'yes' : 'no';
  return [numberQuestion, correctAnswer];
};

export default () => {
  playGame(question, getData);
};
