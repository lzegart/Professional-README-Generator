// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
    * [Description](#description)
      * [Technologies Used](#technologies-used) 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Description
  ${data.description}

    ### Technologies Used
    ${data.technologies}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.username}
  ${data.profile}
  ${data.email}
  `;
}

module.exports = generateMarkdown;