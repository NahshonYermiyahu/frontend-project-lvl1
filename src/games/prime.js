import loopCheck from '../loopСheck.js';

function getQuestion() {
  // create a number to check
  const numberToCheck = Math.ceil(Math.random() * 100);
  const result = [];
  let numberCheck = 'yes';

  // number check
  for (let i = 2; i < numberToCheck; i += 1) {
    if (numberToCheck <= 1 || numberToCheck % i === 0) {
      numberCheck = 'no';
    }
  }

  result.push(numberCheck);
  result.push(numberToCheck);
  return result;
}

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return loopCheck(getQuestion);
};
