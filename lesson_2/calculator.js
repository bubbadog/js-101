// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform an operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

prompt('Welcome to the Calculator!');

prompt("What's the first number?");
let number1 = Number(readline.question());

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number");
  number1 = Number(readline.question());
}

prompt("What's the second number?");
let number2 = Number(readline.question());

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number");
  number2 = Number(readline.question());
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = Number(readline.question());

while (![1, 2, 3, 4].includes(operation)) {
  prompt('Must choose 1, 2, 3, 4');
  operation = Number(readline.question());
}

let output;

switch (operation) {
  case 1:
    output = number1 + number2;
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
    prompt("There was an error! Please try again");
}

prompt(`The result is ${output}`);


