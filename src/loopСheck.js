import readlineSync from 'readline-sync';

function check(array) {
  console.log(`Question: ${array[1]}`);
  const answer = readlineSync.question('Your answer:');
  let result = false;

  if (answer === array[0].toString()) {
    console.log('Correct!');
    result = true;
  } else {
    console.log('------------------------------------------------\n'
      + `Question: ${array[1]}\nYour answer: ${answer}\n`
      + `${answer} is wrong answer ;(. Correct answer was ${array[0]}.`);
  }
  return result;
}
export default (getQuestion) => {
  let result = true;

  // transmission of the question and verification of the answer
  for (let i = 0; i < 3; i += 1) {
    const resultGetQuestion = getQuestion();

    if (!check(resultGetQuestion)) {
      result = false;
      break;
    }
  }
  return result;
};
