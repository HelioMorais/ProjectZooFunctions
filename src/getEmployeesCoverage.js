const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesInfo = employees.map(({ id, firstName, lastName, responsibleFor }) => ({
  id: `${id}`,
  fullName: `${firstName} ${lastName}`,
  species: responsibleFor.map((specieID) =>
    species.find((specie) => specie.id === specieID).name),
  locations: responsibleFor.map((specieID) =>
    species.find((specie) => specie.id === specieID).location),
}));

function getEmployeesCoverage(obj) {
  if (!obj) {
    return employeesInfo;
  }
  const result = employeesInfo.find((employee) => (obj.name && employee.fullName
    .includes(obj.name)) || (obj.id && employee.id === obj.id));
  if (!result) {
    throw new Error('Informações inválidas');
  }
  return result;
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage({ name: 'Stephanie' }));
console.log(getEmployeesCoverage({ name: 'Bethea' }));

module.exports = getEmployeesCoverage;
