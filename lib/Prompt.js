const inquirer = require('inquirer');

const team = [];

const prompt = _ => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add to your team?',
            choices: ['Manager', 'Engineer', 'Intern', 'Employee']
        },
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
            message: 'Input Office Number Here: ',
            when: ({ role }) => {
                if (role === 'Manager') return true;
                return false;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Input Github Username Here: ',
            when: ({ role }) => {
                if (role === 'Engineer') return true;
                return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Input School Here: ',
            when: ({ role }) => {
                if (role  === 'Intern') return true;
                return false;
            }
        },
        {
            type: 'confirm',
            name: 'newMember',
            message: 'Would you like to add another person to the team?',
            default: false
        }
    ])
    .then(teamMember => {
        team.push(teamMember);
        if (teamMember.newMember) return prompt();
        else return team;
    })
}

module.exports = { prompt };