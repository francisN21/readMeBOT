// required const for the 
const fs = require('fs');
const inquirer = require('inquirer');
const { createConnection } = require('net');
const util = require('util');




// array of questions for user
const questions = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },

];

// function to write README file
const writeToFile = (fileName, data) => {
};

// function to initialize program
const init = () => {

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
          init();
      } else {
          connection.end();
          process.exit(0);
      }
  })
}

start();