import { gear } from './gear';

describe('gear reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = gear(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved gear when SET_GEAR action is passed through', () => {
    const expected = [{
      itemName: 'Sleeping bag',
      comments: '1'
    }];

    const actionObj = {
      type: 'SET_GEAR',
      gear: [{
        itemName: 'Sleeping bag',
        comments: '1'
      }]
    };

    const result = gear(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});