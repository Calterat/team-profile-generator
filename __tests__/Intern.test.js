const Intern = require('../lib/intern');

test("Create an intern", () => {
    const intern = new Intern('sarah', 123, 'sarah@test.com', 'UT');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("Create an intern", () => {
    const intern = new Intern('sarah', 123, 'sarah@test.com', 'UT');
    expect(intern.getSchool()).toBe('UT');
});

test("Create an intern", () => {
    const intern = new Intern('sarah', 123, 'sarah@test.com', 'UT');
    expect(intern.getRole()).toBe('Intern');
});
