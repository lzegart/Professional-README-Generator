// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.name}

  ## Table of Contents
  ${data.name}

  ## Installation
  ${data.name}

  ## Usage
  ${data.name}

  ## License
  ${data.name}

  ## Contributing
  ${data.name}

  ## Tests
  ${data.name}

  ## Questions
  ${data.name}
  `;
}

module.exports = generateMarkdown;