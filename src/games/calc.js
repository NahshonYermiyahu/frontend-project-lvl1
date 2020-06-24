import playGame from '../index.js';
import randomNumber from '../utils.js';

const question = 'What is the result of the expression?';

function getCorrectAnswer(operator, number1, number2) {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log('Expression operator not defined.Try again.');
  }

  return result;
}

const getData = () => {
  const question1 = randomNumber(1, 100);
  const question2 = randomNumber(1, 100);
  const questionOperators = ['+', '-', '*'];

  // getting an operator for a question and
  // calculating the result of an operation for checking
  const index = randomNumber(0, questionOperators.length - 1);
  const correctAnswer = getCorrectAnswer(questionOperators[index], question1, question2);
  const questionExpression = `${question1} ${questionOperators[index]} ${question2}`;

  return [questionExpression, correctAnswer];
};

export default () => {
  playGame(question, getData);
};
