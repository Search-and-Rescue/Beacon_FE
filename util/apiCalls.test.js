import { 
  getUser, 
  getEmergencyContacts, 
  getVehicles,
  getGear,
  getTrips,
  addTrip,
  addVehicle
} from './apiCalls';

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
        json: () => Promise.resolve(mockUser)
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
        json: () => Promise.resolve(mockContacts)
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
        json: () => Promise.resolve(mockVehicles)
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

describe('getGear', () => {
  let mockGear;

  beforeEach(() => {
    mockGear = [
      {
        id: 1,
        itemName: "Sleeping bag",
        description: "Withstands -10 degree Fahrenheit"
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGear)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const query = `query {
  user(id: 1) {
    gear{
      id
      itemName
      description
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

    getGear();

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return an array of the current user\'s gear', () => {
    expect(getGear()).resolves.toEqual(mockGear);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getGear()).rejects.toEqual(Error('Error fetching the user\'s gear.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getGear()).rejects.toEqual(Error('fetch failed'))
  });

});

describe('getTrips', () => {
  let mockTrips;

  beforeEach(() => {
    mockTrips = [
      {
      id: 1,
      name: "Mt Massive w/soccer club",
      startingPoint: "Leadville Fish Hatchery",
      endingPoint: "Leadville Fish Hatchery",
      startDate: "November 20, 2019",
      startTime: "07:00",
      endDate: "November 20, 2019",
      endTime: "11:30",
      notificationDate: "November 20, 2019",
      notificationTime: "14:00",
      travelingCompanions: 3,
      active: true
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTrips)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const query = `query {
  user(id: 1) {
    trips{
      id
      name
      startingPoint
      endingPoint
      startDate
      startTime
      endDate
      endTime
      notificationDate
      notificationTime
      travelingCompanions
      active
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

    getTrips();

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return an array of the current user\'s trips', () => {
    expect(getTrips()).resolves.toEqual(mockTrips);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getTrips()).rejects.toEqual(Error('Error fetching the user\'s trips.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getTrips()).rejects.toEqual(Error('fetch failed'))
  });

});

describe('addTrip', () => {
  let mockTrip;
  let mockTripPost;

  beforeEach(() => {
    mockTrip = {
      id: 1,
      name: "Mt Massive w/soccer club",
      startingPoint: "Leadville Fish Hatchery",
      endingPoint: "Leadville Fish Hatchery",
      startDate: "November 20, 2019",
      startTime: "07:00",
      endDate: "November 20, 2019",
      endTime: "11:30",
      notificationDate: "November 20, 2019",
      notificationTime: "14:00",
      travelingCompanions: 3
    }
    mockTripPost = {
      name: "Mt Massive w/soccer club",
      startingPoint: "Leadville Fish Hatchery",
      endingPoint: "Leadville Fish Hatchery",
      startDate: "November 20, 2019",
      startTime: "07:00",
      endDate: "November 20, 2019",
      endTime: "11:30",
      notificationDate: "November 20, 2019",
      notificationTime: "14:00",
      travelingCompanions: 3,
      userId: 1
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTrip)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const mutation = `mutation {
  createTrip(input: {
  name: "${mockTripPost.name}",
  startingPoint: "${mockTripPost.startingPoint}",
  endingPoint: "${mockTripPost.endingPoint}",
  startDate: "${mockTripPost.startDate}",
  startTime: "${mockTripPost.startTime}",
  endDate: "${mockTripPost.endDate}",
  endTime: "${mockTripPost.endTime}",
  notificationDate: "${mockTripPost.notificationDate}",
  notificationTime: "${mockTripPost.notificationTime}",
  travelingCompanions: ${parseInt(mockTripPost.travelingCompanions)},
  userId: ${parseInt(mockTripPost.userId)}
  }) {
  trip {
      id
      name
      startingPoint
      endingPoint
      startDate
      startTime
      endDate
      endTime
      notificationDate
      notificationTime
      travelingCompanions
    }
  }
} `
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: mutation })
    };

    addTrip(mockTripPost);

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return the added Trip for the current user', () => {
    expect(addTrip(mockTripPost)).resolves.toEqual(mockTrip);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(addTrip(mockTripPost)).rejects.toEqual(Error('Error adding a user\'s trip.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(addTrip(mockTripPost)).rejects.toEqual(Error('fetch failed'))
  });

});

describe('addVehicle', () => {
  let mockVehicle;
  let mockVehiclePost;

  beforeEach(() => {
    mockVehicle = {
      id: 1,
      make: "Subaru",
      model: "Impreza",
      year: 2014,
      color: "blue",
      licensePlate: "123ABC"
    }
    mockVehiclePost = {
      make: "Subaru",
      model: "Impreza",
      year: 2014,
      color: "blue",
      licensePlate: "123ABC",
      userId: 1
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVehicle)
      })
    })
  });

  it('should call fetch with the correct url including the query for GraphQL', () => {
    const mutation = `mutation {
  createVehicle(input: {
    make: "${mockVehiclePost.make}",
    model: "${mockVehiclePost.model}",
    year: ${parseInt(mockVehiclePost.year)},
    color: "${mockVehiclePost.color}",
    licensePlate: "${mockVehiclePost.licensePlate}",
    userId: ${parseInt(mockVehiclePost.userId)}
  }) {
    vehicle {
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
      body: JSON.stringify({ query: mutation })
    };

    addVehicle(mockVehiclePost);

    expect(window.fetch).toHaveBeenCalledWith('https://search-and-rescue-api.herokuapp.com/graphql', options)
  });

  it('should return the added Vehicle for the current user', () => {
    expect(addVehicle(mockVehiclePost)).resolves.toEqual(mockVehicle);
  });

});