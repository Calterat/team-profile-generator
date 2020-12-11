const Manager = require('../lib/Manager');

test("creates a manager", () => {
    const manager = new Manager('sarah', 123, 'sarah@test.com', 8133622604);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("creates a manager", () => {
    const manager = new Manager('sarah', 123, 'sarah@test.com', 8133622604);
    expect(manager.officeNumber).toBe(8133622604);
});

test("Return's Manager's role", () => {
    const manager = new Manager('sarah', 123, 'sarah@test.com', 8133622604);
    expect(manager.getRole()).toBe('Manager');
})