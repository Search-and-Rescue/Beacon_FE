import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the retrieved user when SET_USER action is passed through', () => {
    const expected = {
      name: 'Katie Williams',
      password: '303 - 4567',
      email: 'katieW@gmail.com'
    };

    const actionObj = {
      type: 'SET_USER',
      user: {
        name: 'Katie Williams',
        password: '303 - 4567',
        email: 'katieW@gmail.com'
      }
    };

    const result = user(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});