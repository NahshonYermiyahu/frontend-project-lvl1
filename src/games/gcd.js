import main from './main';

function getData() {
  // getting numbers for a question
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  const result = [];
  const size = num1 < num2 ? num1 : num2;
  let divisorMax = 0;

  // getting maximum divisor for checking
  for (let i = 1; i < size + 1; i += 1) {
    if (Number.isInteger(num1 / i) && Number.isInteger(num2 / i)) {
      divisorMax = i > divisorMax ? i : divisorMax;
    }
  }
  result.push(divisorMax);
  result.push(`${num1} ${num2}`);
  return result;
}

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  return main(getData);
};
