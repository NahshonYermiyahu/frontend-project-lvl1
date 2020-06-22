import playGame from '../../index.js';
import randomNumber from '../utils.js';

const getData = () => {
  const step = Math.ceil(Math.random() * 10);
  const hiddenItemPos = Math.ceil(Math.random() * 10) - 1;
  const progression = [randomNumber(10)];
  let questionLine = '';

  // creating an array of numbers forming an
  // arithmetic progression
  for (let i = 0; i < 9; i += 1) {
    progression.push((progression[i] + step));
  }

  // getting a hidden item to check
  const answer = progression[hiddenItemPos];

  // creating a string of numbers forming an
  // arithmetic progression for a question
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenItemPos) {
      questionLine += '.. ';
    } else {
      questionLine += progression[i].toString();
      questionLine += ' ';
    }
  }

  return [answer, questionLine];
};
export default () => {
  const question = 'What number is missing in the progression?';
  playGame(getData, question);
};
