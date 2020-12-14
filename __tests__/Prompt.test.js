const { checkName, checkNumber } = require('../lib/Prompt');

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