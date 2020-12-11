const Engineer = require('../lib/Engineer');

test("Create an Engineer", () => {
    const engineer = new Engineer('sarah', 123, 'sarah@test.com', 'sarahGit');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("Create an Engineer", () => {
    const engineer = new Engineer('sarah', 123, 'sarah@test.com', 'sarahGit');
    expect(engineer.github).toBe('sarahGit');
});

test("Create an Engineer", () => {
    const engineer = new Engineer('sarah', 123, 'sarah@test.com', 'sarahGit');
    expect(engineer.getRole()).toBe('Engineer');
});
