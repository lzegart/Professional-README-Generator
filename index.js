const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./output/" + fileName, data, function(error) {
        if (error) {throw error}
    })
}

// function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((response) => {
          let storeInfo = generateMarkdown(response)
          console.log(storeInfo)
          console.log(response)
          writeToFile("README.md", storeInfo)
      }
  );
}
 
// function call to initialize program
init();
