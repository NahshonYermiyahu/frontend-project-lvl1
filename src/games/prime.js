import playGame from '../../index.js';
import randomNumber from '../utils.js';

const getData = () => {
  const numForTask = randomNumber(100);
  let answer = 'yes';

  // check prime number
  for (let i = 2; i < numForTask; i += 1) {
    if (numForTask <= 1 || numForTask % i === 0) {
      answer = 'no';
    }
  }

  return [answer, numForTask];
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(getData, task);
};
