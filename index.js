// required const for the 
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// linking the generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");
// new file creation
const writeNewFile = util.promisify(fs.writeFile);

let fileName = "";



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
const writeToFile = (fileName, appendData) => {
    // to create the markdown file
    fs.writeNewFile("README.md", appendData, err => {
        if (err) { console.log(err); }
        console.log("Congratulations! README has been generated!")
    });
};

// function to initialize program
const initialize = () => {
// questions prompt starts here
  inquirer.prompt(questions)
//   returns user input to generate the readme data
  .then(function getMD(data){
    // Placeholder for the user input
    let appendData = getMD(data);
    // starts the writeToFile function
    writeToFile(filename, appendData);
  })
};


// start function
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
// starts the readme bot program
start();