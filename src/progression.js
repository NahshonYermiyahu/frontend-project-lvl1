import loopCheck from './loopСheck.js';

function getQuestion() {
  const firstNumber = Math.ceil(Math.random() * 10);
  const step = Math.ceil(Math.random() * 10);
  const hiddenItemPosition = Math.ceil(Math.random() * 10) - 1;
  const seriesNumbers = [firstNumber];
  let seriesNumbersResult = '';
  const result = [];

  // creating an array of numbers forming an arithmetic progression
  for (let i = 0; i < 9; i += 1) {
    seriesNumbers.push((seriesNumbers[i] + step));
  }

  // getting a hidden item to check
  const hiddenItem = seriesNumbers[hiddenItemPosition];

  // creating a string of numbers forming an arithmetic progression for a question
  for (let i = 0; i < seriesNumbers.length; i += 1) {
    if (i === hiddenItemPosition) {
      seriesNumbersResult += '.. ';
    } else {
      seriesNumbersResult += seriesNumbers[i].toString();
      seriesNumbersResult += ' ';
    }
  }

  result.push(hiddenItem);
  result.push(seriesNumbersResult);
  return result;
}
export default () => {
  console.log('What number is missing in the progression?');
  return loopCheck(getQuestion);
};
