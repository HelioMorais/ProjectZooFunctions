const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const result = ids.map((id) => data.species.find((animal) => animal.id === id));
  return result.filter((animal) => animal);
};
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
