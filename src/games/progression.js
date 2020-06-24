import playGame from '../index.js';
import randomNumber from '../utils.js';

const question = 'What number is missing in the progression?';

function getQuestionLine(array, index) {
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    if (i === index) {
      result += '.. ';
    } else {
      result += array[i].toString();
      result += ' ';
    }
  }

  return result;
}

const getData = () => {
  const step = randomNumber(1, 10);
  const hiddenItemPos = randomNumber(1, 10) - 1;
  const progression = [randomNumber(1, 10)];

  // creating an array of numbers forming an
  // arithmetic progression
  for (let i = 0; i < 9; i += 1) {
    progression.push((progression[i] + step));
  }

  // getting a hidden item to check
  const correctAnswer = progression[hiddenItemPos];

  // creating a string of numbers forming an
  // arithmetic progression for a question

  const questionLine = getQuestionLine(progression, hiddenItemPos);

  return [questionLine, correctAnswer];
};
export default () => {
  playGame(question, getData);
};
