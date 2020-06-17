import main from './main.js';

function getData() {
  // create a number to check
  const num = Math.ceil(Math.random() * 100);
  const result = [];
  let checkNum = 'yes';

  // number check
  for (let i = 2; i < num; i += 1) {
    if (num <= 1 || num % i === 0) {
      checkNum = 'no';
    }
  }

  result.push(checkNum);
  result.push(num);
  return result;
}

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return main(getData);
};
