import { currentTrip } from './currentTrip';

describe('currentTrip reducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = currentTrip(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved currentTrip when SET_CURRENT action is passed through', () => {
    const expected = {
      id: 1,
      name: "My trip"
    };

    const actionObj = {
      type: 'SET_CURRENT',
      currentId: 1,
      currentName: "My trip"
    };

    const result = currentTrip(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return null when REMOVE_CURRENT action is passed through', () => {
    const expected = {};

    const actionObj = {
      type: 'REMOVE_CURRENT'
    };

    const result = currentTrip(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});