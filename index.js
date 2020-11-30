const inquirer = require('inquirer');

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
}

// function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((response) => {
        console.log(response)
      }
  );
}
 
// function call to initialize program
init();
