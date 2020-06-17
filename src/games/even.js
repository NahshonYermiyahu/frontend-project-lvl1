import loopCheck from '../loopСheck.js';

function getQuestion() {
  // create a number to check
  const numberToCheck = Math.ceil(Math.random() * 100);
  const result = [];
  let numberCheck = 'no';

  // number check
  if (numberToCheck % 2 === 0) {
    numberCheck = 'yes';
  }

  result.push(numberCheck);
  result.push(numberToCheck);
  return result;
}

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  return loopCheck(getQuestion);
};
