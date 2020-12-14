const { checkName, checkNumber, checkEmail } = require('../lib/Prompt');

test('Validate names entered is not a number or blank', () => {
    const results1 = checkName('123');
    const results2 = checkName('blah');
    const results3 = checkName('');
    expect(results1).toBe(false);
    expect(results2).toBe(true); 
    expect(results3).toBe(false);   
})

test('Validate id entered is a number', () => {
    const results1 = checkNumber('123');
    const results2 = checkNumber('blah');
    const results3 = checkNumber('');
    expect(results1).toBe(true);
    expect(results2).toBe(false); 
    expect(results3).toBe(false);   
})

test('Validate Email entered contains crucial email elements', () => {
    const results1 = checkEmail('test');
    const results2 = checkEmail('testing@');
    const results3 = checkEmail('');
    const results4 = checkEmail('testing.com');
    const results5 = checkEmail('testing@test.com');
    expect(results1).toBe(false);
    expect(results2).toBe(false); 
    expect(results3).toBe(false);  
    expect(results4).toBe(false);
    expect(results5).toBe(true); 
})