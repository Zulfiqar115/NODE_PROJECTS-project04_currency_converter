#!/usr/bin/env nod
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var convertion = {
    "PKR": {
        "USD": 0.003494,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.23,
        "PKR": 353.3,
        "GBP": 1
    },
    "USD": {
        "PKR": 286.15,
        "GBP": 0.083,
        "USD": 1
    }
};
var answer = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount:"
    }
]);
var from = answer.from, to = answer.to, amount = answer.amount;
if (from && to && amount) {
    var result = convertion[from][to] * amount;
    console.log("your convertion from ".concat(from, "to ").concat(to, " is ").concat(result));
}
else {
    console.log('Invalid input');
}
