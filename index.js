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
        message: 'What is the description of your project?',
        name: 'description',
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
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What is the test instructions?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What is the licensing?',
        name: 'license',
        choices: ['none', 'GitHub License', 'MIT License']
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is the link to your GitHub profile?',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
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
