const { prompt } = require('./lib/Prompt');
const { toClasses } = require('./lib/Classes');
const writeHTML = require('./lib/HTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

prompt()
    .then(team => 
        toClasses(team))
    .then(team => 
        writeHTML(team))
    .then(data => console.log(data))
    .catch(err => console.log(err));
