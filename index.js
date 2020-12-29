// required const for the 
const fs = require('fs');
const inquirer = require('inquirer');
const { createConnection } = require('net');
const util = require('util');




// array of questions for user
const questions = [
    {
        name: "Title",
        type: "input",
        message: "What is the project title?"
    },
    {
        name: "Description",
        type: "input",
        message: "What is the project description?"
    },
    {
        name: "Installation",
        type: "input",
        message: "What is the required installation?"
    },
    {
        name: "Usage",
        type: "input",
        message: "Describe how this project is used for: "
    },
    {
        name: "License",
        type: "list",
        message: "Choose a license:",
        choices: ["Apache", "MIT", "Mozilla", "Unlicense", "WTFPL"]
    },
    {
        name: "Contribution",
        type: "input",
        message: "What are the guidelines for contribution?"
    },
    {
        name: "TestInstructions",
        type: "input",
        message: "Any test instructions needed??"
    },
    {
        name: "Github",
        type: "input",
        message: "What is your Github Name?"
    },
    {
        name: "Email",
        type: "input",
        message: "What is you email?"
    },

];

// function to write README file
const writeToFile = (fileName, data) => {
};

// function to initialize program
const initialize = () => {
  inquirer.prompt(questions)
  .then(function getMD(data){

  })
};



const start = () => {
  inquirer.prompt({
    name: "StartorExit",
    type: "list",
    message: "This app enables you to Create a README.md file. Would you like to proceed?",
    choices: ["Start", "Exit"]
  })
  .then(answer => {
      if(answer.StartorExit === "Start"){
          // function call to initialize program
          initialize();
      } else {
          connection.end();
          process.exit(0);
      }
  })
}

start();