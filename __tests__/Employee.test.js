const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('sarah', 123, 'toast@peachy.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});