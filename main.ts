
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold ("\n \t Welcom to 'Mathias' - Currency Converter\n"));

let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JVP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
}

let user_answer = await inquirer.prompt([

    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JVP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JVP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`converted Amount = ${converted_amount.toFixed(2)}`);
