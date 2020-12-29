// function to generate markdown for README
const generateMarkdown = uOutput => {
  return `
# ${uOutput.Title}

### Descritption

${uOutput.Description}

### Installation

required installation
${uOutput.Installation}

### Usage

${uOutput.Usage}

### License

License under [${uOutput.License} License](License)

### Contributions

${uOutput.Contribution}

### Tests

${uOutput.TestInstructions}

### Questions and Suggestions

Feel free to check out my Github:

[github.com/${uOutput.Github}](https://github.com/${uOutput.Github})

You can reach out to me for questions and suggestions at ${uOutput.Email}
`;
};

module.exports = generateMarkdown;
