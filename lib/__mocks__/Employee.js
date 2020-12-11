module.exports = function() {
    this.name = 'Sarah';
    this.id = 123;
    this.email = 'sarah@test.com';
    getName = function() {
        return this.name;
    }
};