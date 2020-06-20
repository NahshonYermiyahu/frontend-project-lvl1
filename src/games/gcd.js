import main from '../main.js';
import randomNumber from '../utils.js';

const getData = () => {
  const numForTask1 = randomNumber(100);
  const numForTask2 = randomNumber(100);
  const sizeMin = numForTask1 < numForTask2 ? numForTask1 : numForTask2;
  let answer = 0;

  // getting maximum divisor for checking
  for (let i = 1; i < sizeMin + 1; i += 1) {
    if (Number.isInteger(numForTask1 / i) && Number.isInteger(numForTask2 / i)) {
      answer = i > answer ? i : answer;
    }
  }

  return [answer, `${numForTask1} ${numForTask2}`];
};

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  main(getData, task);
};
