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
        message: 'What is the description of your project? (What, why, how, and motivation',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What is the usage information? (Provide instructions and examples for use. Include screenshots as needed.)',
        name: 'usage',
      },
      {
        type: 'checkbox',
        message: 'What are the technologies used?',
        name: 'technologies',
        choices: ['APIs', 'html', 'css', 'node.js', 'local storage', 'JavaScript', 'Mongo DB']
      },
      {
        type: 'input',
        message: 'What are the installation instructions? (What are the steps required to install your project?)',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the contributions? (List your collaborators, if any, with links to their GitHub profiles.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Are there any tests for your application? (If so, provide instructions on how to use them.)',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What is the licensing?',
        name: 'license',
        choices: [
            {
                name: 'No License',
              },
            {
                name: 'GitHub license',
                value:
                  '[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)  This project is licensed under the terms of the GitHub license',
              },
              {
                name: 'MIT License',
                value:
                  '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)  This project is licensed under the terms of the MIT license.',
              },
        ]
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
