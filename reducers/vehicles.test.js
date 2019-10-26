import { vehicles } from './vehicles';

describe('vehicles reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = vehicles(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved vehicles when SET_VEHICLES action is passed through', () => {
    const expected = [{
      make: 'Subaru',
      model: 'Impreza',
      year: '2014'
    }];

    const actionObj = {
      type: 'SET_VEHICLES',
      vehicles: [{
        make: 'Subaru',
        model: 'Impreza',
        year: '2014'
      }]
    };

    const result = vehicles(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});