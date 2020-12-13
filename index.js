const { prompt } = require('./lib/Prompt');
const { toClasses } = require('./lib/Classes');
const writeHTML = require('./lib/HTML');
const { writeFile } = require('./lib/File');

prompt()
    .then(team => 
        toClasses(team))
    .then(team => 
        writeHTML(team))
    .then(data => writeFile(data))
    .catch(err => console.log(err));
