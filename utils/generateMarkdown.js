// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.license} 

  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Technologies & Usage](#technologies-&-usage) 
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Technologies & Usage
  ${data.usage}
  * ${data.technologies}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any further questions regarding this app, please contact:
  * Email: ${data.email}
  * GitHub Profile: ${data.profile}
  * GitHub Username: ${data.username}
  `;
}

module.exports = generateMarkdown;