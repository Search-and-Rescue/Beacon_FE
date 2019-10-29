export const getUser = async () => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error fetching the user\'s emergency contacts.')
  }

  const data = await response.json();
  return data.data;
}

export const getEmergencyContacts = async() => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error fetching the user\'s emergency contacts.')
  }

  const data = await response.json();
  return data.data;
}

export const getVehicles = async () => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error fetching the user\'s vehicles.')
  }

  const data = await response.json();
  return data.data;
}

export const getGear = async () => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error fetching the user\'s gear.')
  }

  const data = await response.json();
  return data.data;
}

export const getTrips = async () => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error fetching the user\'s trips.')
  }

  const data = await response.json();
  return data.data;
}

export const addTrip = async (newTrip) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation {
  createTrip(input: {
  name: "${newTrip.name}",
  startingPoint: "${newTrip.startingPoint}",
  endingPoint: "${newTrip.endingPoint}",
  startDate: "${newTrip.startDate}",
  startTime: "${newTrip.startTime}",
  endDate: "${newTrip.endDate}",
  endTime: "${newTrip.endTime}",
  notificationDate: "${newTrip.notificationDate}",
  notificationTime: "${newTrip.notificationTime}",
  travelingCompanions: "${newTrip.travelingCompanions}",
  userId: ${parseInt(newTrip.userId)}
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
    body: JSON.stringify({ query:mutation })
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s trip.')
  }

  const data = await response.json();
  return data;
}

export const addVehicle = async (newVehicle) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation {
  createVehicle(input: {
    make: "${newVehicle.make}",
    model: "${newVehicle.model}",
    year: ${parseInt(newVehicle.year)},
    color: "${newVehicle.color}",
    licensePlate: "${newVehicle.licensePlate}",
    userId: ${parseInt(newVehicle.userId)}
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s vehicle.')
  }

  const data = await response.json();
  return data;
}

export const addGearItem = async (newItem) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation =  `mutation {
  createGear(input: {
    itemName: "${newItem.itemName}",
    description: "${newItem.description}",
    userId: ${parseInt(newItem.userId)}
  }) {
    gear {
      itemName
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s vehicle.')
  }

  const data = await response.json();
  return data;
}

export const addContact = async (newContact) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation{
          createContact(input: {
            name: "${newContact.name}",
            phone: "${newContact.phone}",
            email: "${newContact.email}",
            userId: ${parseInt(newContact.userId)}
          }) {
    emergencyContact {
      name
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
  
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s emergency contact.')
  }

  const data = await response.json();
  return data;
}

export const deleteContact = async (id) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation{
    removeContact(input: {
      id: ${id} }) {
      emergencyContact {
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
    body: JSON.stringify({ query: mutation })
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error removing a user\'s emergency contact.')
  }

  const data = await response.json();
  return data;
}

export const deleteGearItem = async (id) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation =  `mutation{
    removeGear(input: {
    id: ${id} }) {
    gear {
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
    body: JSON.stringify({ query: mutation })
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error deleting a user\'s gear item.')
  }

  const data = await response.json();
  return data;
}

export const deleteVehicle = async (id) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation {
  removeVehicle(input: {
    id: ${id} }) {
    vehicle {
      id
      make
      model
      year
      color
      licensePlate
      state
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
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error deleting a user\'s vehicle.')
  }

  const data = await response.json();
  return data;
}