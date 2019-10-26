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
    };

    const result = actions.setUser(mockUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_CONTACTS', () => {
    const mockContact = [{
      name: 'Sam Freeman',
      password: '303-1111',
      email: 'samF@gmail.com'
    }];
    const expectedAction = {
      type: 'SET_CONTACTS',
      contacts: [{
        name: 'Sam Freeman',
        password: '303-1111',
        email: 'samF@gmail.com'
      }]
    };

    const result = actions.setEmergencyContacts(mockContact);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_VEHICLES', () => {
    const mockVehicles = [{
      make: 'Subaru',
      model: 'Impreza',
      year: '2014'
    }];
    const expectedAction = {
      type: 'SET_VEHICLES',
      vehicles: [{
        make: 'Subaru',
        model: 'Impreza',
        year: '2014'
      }]
    };

    const result = actions.setVehicles(mockVehicles);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_GEAR', () => {
    const mockGear = [{
      item_name: 'Sleeping bag',
      comments: '1'
    }];
    const expectedAction = {
      type: 'SET_GEAR',
      gear: [{
        item_name: 'Sleeping bag',
        comments: '1'
      }]
    };

    const result = actions.setGear(mockGear);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_TRIPS', () => {
    const mockTrips = [{
      name: 'My trip',
      starting_point: 'starting_point',
      ending_point: 'ending_point',
      traveling_companions: 'none'
    }];
    const expectedAction = {
      type: 'SET_TRIPS',
      trips: [{
        name: 'My trip',
        starting_point: 'starting_point',
        ending_point: 'ending_point',
        traveling_companions: 'none'
      }]
    };

    const result = actions.setTrips(mockTrips);

    expect(result).toEqual(expectedAction);
  });

});