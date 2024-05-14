#! /usr/bin/eno node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1)

const answer = await inquirer.prompt([
    {
        name : "usernumber",
        type : "number",
        message : "please guess a number between 1-6:",
    },
]);

if (answer.usernumber === randomNumber){
    console.log('you guessed a right number.');
}else{
    console.log('you guessed a wrong number.');
}
