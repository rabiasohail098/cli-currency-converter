import inquirer from "inquirer";
const currency = {
    USD: 1, // 1 dollar ko sub currency me convert ker k yea value save ki hain
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    { name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    { name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    { name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);
console.log(userAnswer);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedamount = baseAmount * toAmount;
console.log(convertedamount);
