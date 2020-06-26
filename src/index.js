import readlineSync from 'readline-sync';

const numberOfGameRounds = 3;

export default (gameDescription, getData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(gameDescription);

  // transmission of the question and verification of the answer
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [task, correctAnswer] = getData();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer !== correctAnswer) {
      console.log('------------------------------------------------');
      console.log(`Question: ${task}.`);
      console.log(`Your answer: ${userAnswer}.`);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
