const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counts = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach(({ age }) => {
    if (age < 18) {
      counts.child += 1;
    } else if (age < 50) {
      counts.adult += 1;
    } else {
      counts.senior += 1;
    }
  });

  return counts;
};

const calculateEntry = (entrants = []) => {
  const ticketPrices = {
    child: 20.99,
    adult: 49.99,
    senior: 24.99,
  };

  const counts = countEntrants(entrants);

  let total = 0;
  Object.entries(counts).forEach(([ageGroup, count]) => {
    total += count * ticketPrices[ageGroup];
  });

  return Number(total.toFixed(2));
};

const entrants = [
  { name: 'Lara Carvalho', age: 3 },
  { name: 'Frederico Moreira', age: 4 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 20 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
