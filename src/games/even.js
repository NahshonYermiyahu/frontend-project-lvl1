import main from '../main.js';
import randomNumber from '../utils.js';

const getData = () => {
  const numForTask = randomNumber(100);
  const answer = numForTask % 2 === 0 ? 'yes' : 'no';
  return [answer, numForTask];
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  main(getData, task);
};
