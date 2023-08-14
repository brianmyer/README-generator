// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs/promises';

// TODO: Create an array of questions for user input
const questions = await inquirer 
.prompt([ {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please provide a description of your application",
  },
//   {
//     type: 'input',
//     name: 'table-of-contents',
//     message: "Please provide a description of your application",
//   },
  {
    type: 'input',
    name: 'installation',
    message: "Please provide any installation instructions",
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is the usage information of this application",
  },
//   {
//     type: 'input',
//     name: 'license',
//     message: "Please provide a description of your project",
//   },
  {
    type: 'input',
    name: 'contributing',
    message: "Please list any contribution guidelines",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Please provide test instructions for you application",
  },
  {
    type: 'input',
    name: 'username',
    message: "Please provide your GitHub username",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide your email address",
  }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
console.log(questions)

let readmeText = 
`# ${questions.title}

## Description

${questions.description}

## Table of Contents

## Installation

${questions.installation}

## Usage

${questions.usage}

## License

## Contributing

${questions.contributing}

## Tests

${questions.tests}

## Questions

${questions.username} ${questions.email}`

console.log(readmeText)