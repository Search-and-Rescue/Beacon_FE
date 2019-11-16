import { trips } from './trips';

describe('trips reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = trips(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved trips when SET_TRIPS action is passed through', () => {
    const expected = [{
      name: 'My trip',
      starting_point: 'starting_point',
      ending_point: 'ending_point',
      traveling_companions: 'none'
    }];

    const actionObj = {
      type: 'SET_TRIPS',
      trips: [{
        name: 'My trip',
        starting_point: 'starting_point',
        ending_point: 'ending_point',
        traveling_companions: 'none'
      }]
    };

    const result = trips(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});