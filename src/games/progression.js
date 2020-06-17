import main from './main.js';

function getData() {
  const num1 = Math.ceil(Math.random() * 10);
  const step = Math.ceil(Math.random() * 10);
  const hiddenItemPos = Math.ceil(Math.random() * 10) - 1;
  const numbers = [num1];
  let stringNumbers = '';
  const result = [];

  // creating an array of numbers forming an arithmetic progression
  for (let i = 0; i < 9; i += 1) {
    numbers.push((numbers[i] + step));
  }

  // getting a hidden item to check
  const hiddenItem = numbers[hiddenItemPos];

  // creating a string of numbers forming an arithmetic progression for a question
  for (let i = 0; i < numbers.length; i += 1) {
    if (i === hiddenItemPos) {
      stringNumbers += '.. ';
    } else {
      stringNumbers += numbers[i].toString();
      stringNumbers += ' ';
    }
  }

  result.push(hiddenItem);
  result.push(stringNumbers);
  return result;
}
export default () => {
  console.log('What number is missing in the progression?');
  return main(getData);
};
