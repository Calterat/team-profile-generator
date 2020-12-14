const inquirer = require('inquirer');
const fetch = require('node-fetch');

const team = [];

// tests for string input
const checkName = input => {
    if (!input) {
        console.log('Please enter something!');
        return false;
    }
    let isInt = parseInt(input);
    if ((typeof isInt === 'number') && (isInt)) {
        console.log(' Backspace this out and please enter something more valid!');
        return false; 
    }
    else return true;
}

// test for numbers in strings
const checkNumber = input => {
    if (!input) {
        console.log('Please enter a number!');
        return false;
    }
    let isInt = parseInt(input);
    if (!isInt) {
        console.log(' Backspace this out and please enter a number!');
        return false;
    }
    else return true;
}

// tests for string input and Email
const checkEmail = input => {
    if (!input) {
        console.log('Please enter something!');
        return false;
    }
    let isInt = parseInt(input);
    if ((typeof isInt === 'number') && (isInt)) {
        console.log(' Backspace this out and please enter something more valid!');
        return false; 
    }
    else {
        let emailCount = 0;
        for ( let i = 0; i < input.length; ++i ) {
            if ((input[i] === '@') || (input[i] === '.')) emailCount++;
        }
        if (emailCount === 2) return true
        else {
            console.log(" This doesn't appear to be an email address. Please backspace this out and try again!");
            return false;
        }
    }
}


// the inquirer data specifically for the manager
const manager = _ => {
    console.log('Welcome, Manager, to your team maker!');
    console.log('Please enter your info first, then you will be prompted to enter in the rest of your team.');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Input Name Here: ',
            validate: checkName    
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input ID Here: ',
            validate: checkNumber
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input Email Here: ',
            validate: checkEmail
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Input Office Number Here (enter number without the dashes): ',
            validate: checkNumber
        }
    ])
    .then(manager => {
        manager.role = 'Manager';
        team.push(manager);
    })
}

// these are the prompts for the team members for the manager. NOTE: the manager argument isn't used for anything.
const prompt = manager => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'No More']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Input Name Here: ',
            validate: checkName,
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input ID Here: ',
            validate: checkNumber,
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input Email Here: ',
            validate: checkEmail,
            when: ({role}) => {
                if (role === 'No More') return false;
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Input Github Username Here (Must be a valid one!): ',
            validate: checkName,
            // validate: function(input) {

            //     const validateUser = (user, result) => {
            //         return new Promise(() => {
            //             fetch(`https://api.github.com/users/${user}`)
            //                 .then(response => {
            //                     if (response.ok) {
            //                         result(true);
            //                         return;
            //                     } else {                                   
            //                         result(' - Wrong! Try again, because this username does not checkout! Backspace this trash out and retype.');
            //                         return;
            //                     }
            //                 })
            //         })
            //     }

            //     const result = this.async();

            //     validateUser(input, result);
            // },
            when: ({ role }) => {
                if (role === 'Engineer') return true;
                return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Input School Here: ',
            validate: checkName,
            when: ({ role }) => {
                if (role  === 'Intern') return true;
                return false;
            }
        }
    ])
    .then(teamMember => {
        if (teamMember.role !== 'No More') {
            debugger;
            team.push(teamMember);
            return prompt();
        }
        else return team;
    })
}

module.exports = { manager, prompt, checkName, checkNumber, checkEmail };