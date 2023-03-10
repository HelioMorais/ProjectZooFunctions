const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Deve retornar um objeto com o horário de funcionamento do zoológico quando nenhum parametro for passado', () => {
    const result = getOpeningHours();
    expect(result).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Deve retornar "The zoo is closed" quando o zoológico estiver fechado em determinado dia e hora', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toEqual('The zoo is closed');
  });

  it('Deve retornar "The zoo is open" quando o zoológico estiver aberto em determinado dia e hora', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toEqual('The zoo is open');
  });

  it('Deve retornar "The zoo is closed" quando o zoológico está fechado em determinado dia e hora', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toEqual('The zoo is closed');
  });

  it('Deve lançar uma exceção com a mensagem "The day must be valid. Example: Monday" quando o dia fornecido for inválido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Deve lançar uma exceção com a mensagem "The abbreviation must be \'AM\' or \'PM\'" quando a abreviação do horario fornecido for inválida', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Deve lançar uma exceção com a mensagem "The hour should represent a number" quando a hora dada for inválida', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Deve lançar uma exceção com a mensagem "The minutes should represent a number" quando os minutos fornecidos forem inválidos', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Deve lançar uma exceção com a mensagem "The hour must be between 0 and 12" quando determinada hora estiver fora do intervalo', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Deve lançar uma exceção com a mensagem "The minutes must be between 0 and 59" quando os minutos dados estiver fora do intervalo', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
