import inquirer from "inquirer";
import chalk from "chalk";
const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
let words = ans.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright.italic.bold(`Your sentence words counting is ${words.length} `));
