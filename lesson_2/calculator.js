// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform an operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt(MESSAGES['firstNumber']);

  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGES['operationPrompt']);
  let operation = Number(readline.question());

  while (![1, 2, 3, 4].includes(operation)) {
    prompt('Must choose 1, 2, 3, 4');
    operation = Number(readline.question());
  }

  let output;

  switch (operation) {
    case 1:
      output = Number(number1) + Number(number2);
      break;
    case 2:
      output = number1 - number2;
      break;
    case 3:
      output = number1 * number2;
      break;
    case 4:
      output = number1 / number2;
      break;
    default:
      prompt(MESSAGES['error']);
  }

  prompt(MESSAGES['output'] + `${output}`); 

  prompt(MESSAGES['anotherCalculation']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}




