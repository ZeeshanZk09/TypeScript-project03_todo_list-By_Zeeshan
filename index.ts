#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList =[];
let userAns =true
console.log(chalk.bgRgb(100, 100, 100).magentaBright("\n\t\t\t----------Welcome to The Todo-App----------\n"));

while(userAns){
    let createATodo =await inquirer.prompt([
        {
            name:"singleTodo",
            type:"input",
            message:chalk.red("Enter the todo you are to do!: "),
        }
    ]);
    todoList.push(createATodo.singleTodo);
    console.log(`${ createATodo.singleTodo} added into your todo-List successfully`);
    let addMultiTodos =await inquirer.prompt([
        {
            name:"multiTodos",
            type:"confirm",
            message:chalk.yellowBright("Do you wanna add more todos?"),
            default:"false"
        }
    ]);
    userAns = addMultiTodos.multiTodos
}
console.log(`Your updated Todo-List: ${todoList.join(`,\ `)}.`);