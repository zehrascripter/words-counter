#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//word counter project
const ans :{
    Sentence:string
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])
 let words = ans.Sentence.trim().split(" ");
 console.log(words);
 console.log(chalk.yellowBright.italic.bold(`Your sentence words counting is ${words.length} `));
 
 