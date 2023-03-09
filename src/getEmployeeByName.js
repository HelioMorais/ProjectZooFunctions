const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const {
    employees,
  } = data;
  return employees.find(({
    firstName,
    lastName,
  }) =>
    firstName === employeeName || lastName === employeeName) || {};
}

console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
