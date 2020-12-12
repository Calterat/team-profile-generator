const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const teamMember = [];
let teamCount = 1;

// const newMember = (role) => {
//     let member = {};
//     if (!role) {
//         member.role = 'Manager';
//     } else {
//         member.role = role;
//     }
//     console.log(member);
//     promptForTeam(member);
// }

const promptForTeam = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Input Name Here: ",
            when: (teamCount) => {
                if (teamCount ===1) return false;
                else return true;
            }
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
            type: 'list',
            name: 'choice',
            message: 'Who would you like to add another to your team?',
            choices: ['Engineer', 'Intern', 'Employee', 'NO']
        }
    ])
    .then(newMember => {
        teamMember.push(newMember);
        if (newMember.choice === 'NO') return newMember;
        else promptForTeam();
    })
}

promptForTeam();

