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
        message: 'What is your GitHub username?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What goes in your Table of Contents?',
        name: 'table of contents',
      },
      {
        type: 'input',
        message: 'What are the technologies used?',
        name: 'technologies',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'What is the licensing?',
        name: 'license',
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
