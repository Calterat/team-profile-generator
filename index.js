const { manager, prompt } = require('./lib/Prompt');
const { toClasses } = require('./lib/Classes');
const writeHTML = require('./lib/HTML');
const { writeFile } = require('./lib/File');

// Welcomes the manager and asks for manager's info
manager()
    // Prompts Manager to select Engineer or Intern
    .then(prompt)
    // This takes the array of objects and converts them to their prototyped counterparts
    .then(team => 
        toClasses(team))
    // This takes the team member array and begins the create the html file
    .then(team => 
        writeHTML(team))
    // This take the frashly written HTML and writes the file to the local 'dist' folder
    .then(data => 
        writeFile(data))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message)
    })
    // cataches any errors thrown from the the promise chain
    .catch(err => 
        console.log(err));
