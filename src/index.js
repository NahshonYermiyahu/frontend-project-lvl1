import readlineSync from 'readline-sync';
import runWelcome from './cli.js';

const numberOfGameRounds = 3;

export default (task, getData) => {
  const userName = runWelcome();
  console.log(task);

  // transmission of the question and verification of the answer
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [taskData, correctAnswer] = getData();
    console.log(`Question: ${taskData}`);
    const userResponse = readlineSync.question('Your answer:');

    if (userResponse.toString() !== correctAnswer.toString()) {
      console.log('------------------------------------------------\n'
        + `Question: ${taskData}\nYour answer: ${userResponse}\n`
        + `${userResponse} is wrong answer ;(. Correct answer was ${correctAnswer}.\n`
        + `Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${userName}!`);
  }
};
