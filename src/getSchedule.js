const { species, hours } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

const createZooInfo = () => {
  const zooInfo = weekDays.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(curr))
        .map((element) => element.name),
    };
    return acc;
  }, {});

  zooInfo.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };

  return zooInfo;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return createZooInfo();
  }

  const targetSpecies = species.find((animal) => animal.name === scheduleTarget);
  if (targetSpecies) {
    return targetSpecies.availability;
  }

  if (weekDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: createZooInfo()[scheduleTarget] };
  }

  return createZooInfo();
}

console.log(getSchedule());
console.log(getSchedule('Tuesday'));
console.log(getSchedule('elephants'));
console.log(getSchedule('Monday'));
console.log(getSchedule('tigers'));

module.exports = getSchedule;
