import inquirer from "inquirer";

let convertion = {
    "PKR":{
    "USD": 0.003494,
    "GBP": 0.0028,
    "PKR": 1
    },
    "GBP":{
     "USD":1.23,
     "PKR": 353.3,
     "GBP": 1   
    },
    "USD":{
        "PKR": 286.15,
        "GBP": 0.083,
        "USD": 1
    }
}
const answer:{
    from: "PKR"|"USD"|"GBP",
    to: "PKR"|"USD"|"GBP", 
    amount: number
} = await inquirer.prompt([
    
    {
    type: "list",
    name: "from",
    choices:["PKR","USD","GBP"],
    message: "select your currency:"
},
{
    type: "list",
    name: "to",
    choices:["PKR","USD","GBP"],
    message: "select your convertion currency:"
},
{
    type: "number",
    name: "amount",
    message: "Enter your convertion amount:"
}
]);
const {from,to,amount}= answer;
if (from && to && amount){
let result = convertion [from][to]*amount;
console.log(`your convertion from ${from}to ${to} is ${result}`)
} else {
    console.log('Invalid input')
}
