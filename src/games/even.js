import main from './main.js';

function getData() {
  // create a number to check
  const num = Math.ceil(Math.random() * 100);
  const result = [];
  let checkNum = 'no';

  // number check
  if (num % 2 === 0) {
    checkNum = 'yes';
  }

  result.push(checkNum);
  result.push(num);
  return result;
}

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  return main(getData);
};
