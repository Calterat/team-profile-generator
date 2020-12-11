const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Prompt {
    start(manager) {
        console.log(`WELCOME! ENTER YOUR TEAM STARTING WITH YOU!`);
        info(manager);
    }
    info(teamMember) {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Input Name Here: "
            },
            {
                type: 'input',
                name: 'id',
                message: 'Input ID Here: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'Input Email Here: '
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Input Office Numer Here: ',
                when: teamMember => {
                    if (teamMember === 'Manager') return true;
                    return false;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Input Github Username Here: ',
                when: teamMember => {
                    if (teamMember === 'Engineer') return true;
                    return false;
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Input School Here: ',
                when: teamMember => {
                    if (teamMember === 'Intern') return true;
                    return false;
                }
            }
        ])
    }
    choose() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Would you like to add another one of these to your team?',
                choices: ['Engineer', 'Intern', 'Employee', 'NO']
            }
        ])
    }
}

module.exports = Prompt;