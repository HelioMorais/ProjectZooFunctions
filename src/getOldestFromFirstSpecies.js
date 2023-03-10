const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const speciesId = employee.responsibleFor[0];
  const species = data.species.find((element) => element.id === speciesId);
  const animalBiggerAge = species.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const { name, sex, age } = animalBiggerAge;
  return [name, sex, age];
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
