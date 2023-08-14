// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs/promises';
let badgeUrl;
let licenseUrl;

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
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license from the following:',
    choices: [
      'MIT',
      'Mozilla',
      'Open Data Commons',
    ],
  },
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
function generateLicense(license) {
    if (questions.license === 'MIT') {
        badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        licenseUrl = 'https://opensource.org/licenses/MIT'
    } else if (questions.license === 'Mozilla') {
        badgeUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        licenseUrl = 'https://opensource.org/licenses/MPL-2.0'
    } else {
        badgeUrl = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
        licenseUrl = 'https://opendatacommons.org/licenses/by/'
    }
}
// Function call to initialize app
init();
console.log(questions);
generateLicense();

let readmeText = 
`# ${questions.title} ${badgeUrl}

## Description

${questions.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${questions.installation}

## Usage

${questions.usage}

## License

To know more about the ${questions.license} license please visit ${licenseUrl}.

## Contributing

${questions.contributing}

## Tests

${questions.tests}

## Questions

[Link to my GitHub profile](https://github.com/${questions.username})

Please email me at ${questions.email} for any further questions`

console.log(readmeText)
fs.writeFile('README.md', readmeText)