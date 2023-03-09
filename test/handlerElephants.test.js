const handlerElephants = require('../src/handlerElephants');

describe('handlerElephants', () => {
  describe('count', () => {
    it('Deve retornar o número de elefantes', () => {
      expect(handlerElephants('count')).toEqual(4);
    });
  });

  describe('names', () => {
    it('Deve retornar um array de nomes de elefantes que tenha Jefferson', () => {
      const elephantNames = handlerElephants('names');
      expect(elephantNames).toContain('Jefferson');
    });
  });

  describe('averageAge', () => {
    it('Deve retornar a idade média dos elefantes um número', () => {
      const averageAge = handlerElephants('averageAge');
      expect(typeof averageAge).toBe('number');
      expect(averageAge).toBeCloseTo(10.5);
    });
  });

  describe('location', () => {
    it('Deve retornar a localização dos elefantes NW', () => {
      expect(handlerElephants('location')).toEqual('NW');
    });
  });

  describe('popularity', () => {
    it('Deve retornar a popularidade dos elefantes', () => {
      expect(handlerElephants('popularity')).toEqual(5);
    });
  });

  describe('availability', () => {
    it('Deve retornar uma os dias quando os elefantes estiverem disponíveis para visitação', () => {
      const availability = handlerElephants('availability');
      expect(availability).toContain('Tuesday');
      expect(availability).toContain('Friday');
      expect(availability).toContain('Saturday');
      expect(availability).toContain('Sunday');
    });
  });

  describe('invalid parameter', () => {
    it('Deve retornar "Parâmetro inválido', () => {
      expect(handlerElephants(123)).toEqual('Parâmetro inválido, é necessário uma string');
    });
  });

  describe('undefined parameter', () => {
    it('Deve retornar undefined', () => {
      expect(handlerElephants(undefined)).toBeUndefined();
    });
  });

  describe('Null parameter', () => {
    it('Deve retornar null', () => {
      expect(handlerElephants('Barabaaaamammmmm')).toBeNull();
    });
  });
});
