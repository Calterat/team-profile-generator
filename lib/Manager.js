const Employee = require('../lib/Employee');

// Manager class uses prototype functions from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }    

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;