import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_USER', () => {
    const mockUser = {
      name: 'Katie Williams',
      password: '303 - 4567',
      email: 'katieW@gmail.com'
    };
    const expectedAction = {
      type: 'SET_USER',
      user: { 
        name: 'Katie Williams',
        password: '303 - 4567',
        email: 'katieW@gmail.com'
      }
    }

    const result = actions.setUser(mockUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_CONTACTS', () => {
    const mockContact = {
      name: 'Sam Freeman',
      password: '303-1111',
      email: 'samF@gmail.com'
    };
    const expectedAction = {
      type: 'SET_CONTACTS',
      contacts: {
        name: 'Sam Freeman',
        password: '303-1111',
        email: 'samF@gmail.com'
      }
    }

    const result = actions.setEmergencyContacts(mockContact);

    expect(result).toEqual(expectedAction);
  });

});