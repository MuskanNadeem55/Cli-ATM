#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance=10000;
let myPin=1357;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin: ",
            type:"number"
        }
    ]
);
if (pinAnswer.pin === myPin){
    console.log("\n\tYour pin is correct!\n");

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message: "Please select an option",
                type:"list",
                choices:["Withdraw", "Fast Cash", "Check Balance", "Deposit Balance"]
            }
        ]
    );
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter Your Amount",
                    type:"number"
                }
            ]
        )
        if (amountAns.amount > myBalance) {
            console.log(`You cannot withdraw more then your balance and your current balance is ${myBalance}`);
    }
    else if (amountAns.amount <= myBalance) {
      
    
        let remaining = myBalance - amountAns.amount;
        console.log(`${amountAns.amount} is withdrawn from ${myBalance} now your balance is ${remaining}`);
}
    }   
 else if (operationAns.operation === "Fast Cash") {
    let options = await inquirer.prompt(
        [
            {
                name:"option",
                type:"list",
                message:"Select an amount",
                choices:["2000","6000","8000","10000"]
            }
        ]
    )
    let remaining = myBalance - options.option 
    console.log(`${options.option} is withdrawn from ${myBalance} now your balance is ${remaining}`);

 }
   else if (operationAns.operation === "Check Balance"){
    console.log(`Your current balance is ${myBalance}`);
    
  }

   else if (operationAns.operation === "Deposit Balance") {
      let depositBalance = await inquirer.prompt({
        name:"deposit",
        message:"Enter the amount you want to deposit",
        type:"number"
      })

      let newBalance = depositBalance.deposit + myBalance;
      console.log(`${depositBalance.deposit} has been deposited in your account now your balance is ${newBalance}`);
      
  }

} else {
  console.log("\n\tYour pin is incorrect\n");
}
