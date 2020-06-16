import readlineSync from 'readline-sync';

export default (func = 1) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  // launching the yoke function and checking the result
  if (func !== 1) {
    const result = func();
    if (result) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }
};
