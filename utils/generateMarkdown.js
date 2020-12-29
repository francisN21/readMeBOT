// function to generate markdown for README
const generateMarkdown = uOutput => {
  return `# ${uOutput.Title}
  
  ${uOutput.Title}
  ${uOutput.Description}
  ${uOutput.Installation}
  ${uOutput.Usage}
  ${uOutput.License}
  ${uOutput.Contribution}
  ${uOutput.TestIstructions}
  ${uOutput.Github}
  ${uOutput.Email}
`;
};

module.exports = generateMarkdown;
