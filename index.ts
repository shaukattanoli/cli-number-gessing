#! /usr/bin/env node


import inquirer from "inquirer";


// 1) computer will genrate a random number - Done.

// 2) user input for guessing number - Done.

// 3) compare user input with computer genrated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
console.log("wellcome to number guessing game");

const answers = await inquirer.prompt([
    {name: "userGuessedNumber",
     type: "number",
     message: "please guess a number between 1-6:",},
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}else {
    console.log("you guessed wrong number");
}



