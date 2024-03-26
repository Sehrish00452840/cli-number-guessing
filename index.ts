#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3)Compare user input with computer generated number and show result

console.log("\n\tWellcome to CodeWithSehar - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number between 1-6:",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}
