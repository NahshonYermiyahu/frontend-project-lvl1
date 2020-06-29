import playGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

function getProgression(firstMember, step, length) {
  const progression = [firstMember];
  for (let i = 0; i < length - 1; i += 1) {
    progression.push((progression[i] + step));
  }
  return progression;
}

const getData = () => {
  const step = randomNumber(1, 10);
  const hiddenItemPos = randomNumber(1, progressionLength) - 1;
  const firstMember = randomNumber(1, 10);

  // creating an array of numbers forming an
  // arithmetic progression
  const progression = getProgression(firstMember, step, progressionLength);

  // getting a hidden item to check
  const correctAnswer = progression[hiddenItemPos];
  progression[hiddenItemPos] = '..';

  // creating a string of numbers forming an
  // arithmetic progression for a question
  const task = progression.join(' ');

  return [task, correctAnswer.toString()];
};
export default () => {
  playGame(gameDescription, getData);
};
