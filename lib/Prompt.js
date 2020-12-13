const inquirer = require('inquirer');

const team = [];

// the inquirer data specifically for the manager
const manager = _ => {
    console.log('Welcome, Manager, to your team maker!');
    console.log('Please enter your info first, then you will be prompted to enter in the rest of your team.');
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
            message: 'Input Office Number Here: '
        }
    ])
    .then(manager => {
        manager.role = 'Manager';
        team.push(manager);
    })
}

// these are the prompts for the team members for the manager. NOTE: the manager argument does nothing.
const prompt = manager => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'No More']
        },
        {
            type: "input",
            name: "name",
            message: "Input Name Here: ",
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input ID Here: ',
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input Email Here: ',
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
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
        }
    ])
    .then(teamMember => {
        if (teamMember.role !== 'No More') {
            team.push(teamMember);
            return prompt();
        }
        else return team;
    })
}

module.exports = { manager, prompt };