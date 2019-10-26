import { contacts } from './contacts';

describe('contacts reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = contacts(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved contacts when SET_CONTACTS action is passed through', () => {
    const expected = [{
      name: 'Sam Freeman',
      password: '303-1111',
      email: 'samF@gmail.com'
    }];

    const actionObj = {
      type: 'SET_CONTACTS',
      contacts: [{
        name: 'Sam Freeman',
        password: '303-1111',
        email: 'samF@gmail.com'
      }]
    };

    const result = contacts(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});