const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const team = [];

// this converts the original array from the inquirer packages and filters them into their prototype counterpart so the inherited functions operate
const toClasses = members => {
    for ( let i = 0; i < members.length; ++i ) {
        let member;
        switch (members[i].role) {
            case 'Manager':
                member = new Manager(members[i].name, members[i].id, members[i].email, members[i].officeNumber);
                break;
            case 'Engineer':
                member = new Engineer(members[i].name, members[i].id, members[i].email, members[i].github);
                break;
            case 'Intern':
                member = new Intern(members[i].name, members[i].id, members[i].email, members[i].school);
                break;
            case 'Employee':
                member = new Employee(members[i].name, members[i].id, members[i].email);
                break;
            default:
                // just in case an error is thrown
                console.log('ERROR with Classes');
                break;      
        }
        team.push(member);
    }
    return team;
}

module.exports = { toClasses };