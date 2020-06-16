import readlineSync from 'readline-sync';

export default () => {
  let result = false;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const question = Math.ceil(Math.random() * 100);
    const questionEven = question % 2 === 0;
    const questionOdd = question % 2 !== 0;

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer:');
    const answerYes = answer === 'yes';
    const answerNo = answer === 'no';

    if (!answerYes && !answerNo) {
      console.log(`${answer} is wrong answer ;(.`);
      break;
    }

    if ((questionEven && answerYes) || (questionOdd && answerNo)) {
      console.log('Correct!');
    }

    if (questionEven && answerNo) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      break;
    }

    if (questionOdd && answerYes) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      break;
    }

    if (i === 2) {
      result = true;
    }
  }
  return result;
};
