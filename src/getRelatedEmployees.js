const data = require('../data/zoo_data');

const managerIds = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

function isManager(id) {
  return managerIds.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = [];
  data.employees.forEach((employee) => {
    const { firstName, lastName, managers } = employee;
    if (managers.includes(managerId)) {
      relatedEmployees.push(`${firstName} ${lastName}`);
    }
  });

  return relatedEmployees;
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
