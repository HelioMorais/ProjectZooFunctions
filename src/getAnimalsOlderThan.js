const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((element) => element.name === animal);

  if (!species) {
    return false;
  }

  return species.residents.every((element) => element.age >= age);
};
console.log(getAnimalsOlderThan('bears', 4));
module.exports = getAnimalsOlderThan;
