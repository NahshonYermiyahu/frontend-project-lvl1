import readlineSync from 'readline-sync';

export default (array) => {
  console.log(`Question: ${array[1]}`);
  const answer = readlineSync.question('Your answer:');
  let result = false;

  if (+answer === array[0]) {
    console.log('Correct!');
    result = true;
  } else {
    console.log('------------------------------------------------\n'
      + `Question: ${array[1]}\nYour answer: ${answer}\n`
      + `${answer} is wrong answer ;(. Correct answer was ${array[0]}.`);
  }
  return result;
};
