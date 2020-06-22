import readlineSync from 'readline-sync';

const check = (data) => {
  console.log(`Question: ${data[1]}`);
  const answer = readlineSync.question('Your answer:');
  let result = false;

  if (answer === data[0].toString()) {
    console.log('Correct!');
    result = true;
  } else {
    console.log('------------------------------------------------\n'
      + `Question: ${data[1]}\nYour answer: ${answer}\n`
      + `${answer} is wrong answer ;(. Correct answer was ${data[0]}.`);
  }
  return result;
};

export default (getData, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(task);
  let resultCheck = true;

  // transmission of the question and verification of the answer
  for (let i = 0; i < 3; i += 1) {
    const data = getData();

    if (!check(data)) {
      resultCheck = false;
      break;
    }
  }

  if (resultCheck) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
