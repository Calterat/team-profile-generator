const Employee = require('../lib/Employee');


test('creates a Employee object', () => {
  const employee = new Employee('Sarah', 123, 'sarah@test.com');
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Employee's name is returned", () => {
  const employee = new Employee('Sarah', 123, 'sarah@test.com');
  expect(employee.getName()).toBe('Sarah');
});

test("Employee's ID is returned", () => {
  const employee = new Employee('Sarah', 123, 'sarah@test.com');
  expect(employee.getId()).toBe(123);
});

test("Employee's email is returned", () => {
  const employee = new Employee('Sarah', 123, 'sarah@test.com');
  expect(employee.getEmail()).toBe('sarah@test.com');
});

test("Employee's role is returned", () => {
  const employee = new Employee('Sarah', 123, 'sarah@test.com');
  expect(employee.getRole()).toBe('Employee');
})