import { getUser, getEmergencyContacts, getVehicles } from './apiCalls';

describe('getUser', () => {
  let mockUser;

  beforeEach(() => {
    mockUser = {
      id: 1,
      name: "Katie Williams",
      email: "kdog@gmail.com",
      address: "1111 Mountain Drive",
      city: "Leadville",
      state: "CO",
      zip: "80461",
      phone: "303.123.4567",
      passwordDigest: "SamIsMyFav",
      allergies: "Juniper Berries",
      experienceLevel: "Advanced",
      birthDate: "08/24/1950",
      weight: "130lbs",
      height: "130",
      hairColor: "Olive",
      skinColor: "Pale",
      gender: "F",
      cosarCard: true
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const query = `query{
    user(id: 1){
      id
      name
      email
      address
      city
      state
      zip
      phone
      passwordDigest
      allergies
      experienceLevel
      birthDate
      weight
      height
      hairColor
      skinColor
      gender
      cosarCard
    }
  }`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    };

    getUser();

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return the current user\'s profile information', () => {
    expect(getUser()).resolves.toEqual(mockUser);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getUser()).rejects.toEqual(Error('Error fetching the user\'s emergency contacts.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getUser()).rejects.toEqual(Error('fetch failed'))
  });

});

describe('getEmergencyContacts', () => {
  let mockContacts;

  beforeEach(() => {
    mockContacts = [
      {
        id: 1,
        name: "Samantha Freeman",
        phone: "707.123.4567",
        email: "skiracerchick@earthlink.net"
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const query = `query{
    user(id: 1) {
      emergencyContacts {
        id
        name
        phone
        email
      }
    }
  }`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    };

    getEmergencyContacts();

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return an array of the current user\'s emergency contacts', () => {
    expect(getEmergencyContacts()).resolves.toEqual(mockContacts);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getEmergencyContacts()).rejects.toEqual(Error('Error fetching the user\'s emergency contacts.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getEmergencyContacts()).rejects.toEqual(Error('fetch failed'))
  });

});

describe('getVehicles', () => {
  let mockVehicles;

  beforeEach(() => {
    mockVehicles = [
      {
        id: 1,
        make: "Subaru",
        model: "Impreza",
        year: 2014,
        color: "blue",
        licensePlate: "123ABC"
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const query = `query{
  user(id: 1) {
    vehicles{
      id
      make
      model
      year
      color
      licensePlate
    }
  }
}`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    };

    getVehicles();

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return an array of the current user\'s vehicles', () => {
    expect(getVehicles()).resolves.toEqual(mockVehicles);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getVehicles()).rejects.toEqual(Error('Error fetching the user\'s vehicles.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getVehicles()).rejects.toEqual(Error('fetch failed'))
  });

});