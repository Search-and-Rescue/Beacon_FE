import { currentTrip } from './currentTrip';

describe('currentTrip reducer', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = currentTrip(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved currentTrip when SET_CURRENT action is passed through', () => {
    const expected = {
      name: 'My trip',
      starting_point: 'starting_point',
      ending_point: 'ending_point',
      traveling_companions: 'none'
    };

    const actionObj = {
      type: 'SET_CURRENT',
      currentTrip: {
        name: 'My trip',
        starting_point: 'starting_point',
        ending_point: 'ending_point',
        traveling_companions: 'none'
      }
    };

    const result = currentTrip(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});