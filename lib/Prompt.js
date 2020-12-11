const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Prompt {
    start() {
        console.log(`WELCOME! ENTER YOUR TEAM STARTING WITH YOU!`);
    }
    basicInfo() {
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
            }
        ])
    }
    managerInfo() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Input Office Numer Here: '
            }
        ])
    }
    engineerInfo() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Input Github Username Here: '
            }
        ])
    }
    internInfo() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Input School Here: '
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