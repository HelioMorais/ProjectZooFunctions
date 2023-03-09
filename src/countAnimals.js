const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const specie = data.species.find((element) => element.name === animal.species);
  const sex = animal.sex ? specie.residents
    .filter((element) => element.sex === animal.sex) : specie.residents;
  return sex.reduce((acc) => acc + 1, 0);
}
console.log(countAnimals());
console.log(countAnimals({ species: 'penguins' }));
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
