const { prompt } = require('./lib/Prompt');
const writeHTML = require('./lib/HTML');

prompt()
    .then(team => 
        writeHTML(team))
    .then(HTML => console.log(HTML));