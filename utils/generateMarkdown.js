// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## User Name
${data.name}

  `;
}

module.exports = generateMarkdown;