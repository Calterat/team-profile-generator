const Employee = require('../lib/Employee');

// Intern class uses prototype functions from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;