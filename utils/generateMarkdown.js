// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.license} 

  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Technologies Used](#technologies-used) 
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Technologies Used
  ${data.usage}
  ${data.technologies}

  ## Installation
  ${data.installation}

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