const Manager = require('../lib/manager.js');
const Employee = require('../lib/employee');

test('set office number', () => {
  const value = 10;
  const e = new Manager('dave', 1, 'test', value);
  expect(e.officeNum).toBe(value);
});

test('return manager', () => {
  const value = 'Manager';
  const e = new Manager('dave', 1, 'test@test.com', 7);
  expect(e.getRole()).toBe(value);
});

test('get office number', () => {
  const value = 7;
  const e = new Manager('dave', 1, 'test', value);
  expect(e.getOfficeNum()).toBe(value);
});