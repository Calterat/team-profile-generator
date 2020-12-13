const Employee = require('../lib/Employee');

// Engineer class uses prototype functions from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;