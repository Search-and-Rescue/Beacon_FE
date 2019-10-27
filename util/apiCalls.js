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
 createTrip(input: ${newTrip}) {
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
    body: JSON.stringify({ mutation })
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s trip.')
  }

  const data = await response.json();
  return data.data;
}

export const addVehicle = async (newVehicle) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation {
  createVehicle(input: ${newVehicle}) {
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
    body: JSON.stringify({ mutation })
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s vehicle.')
  }

  const data = await response.json();
  return data.data;
}

export const addGearItem = async (newItem) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation {
  createGear(input: ${newItem}) {
    gear {
      id
      itemName
    }
  } 
}`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mutation })
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s vehicle.')
  }

  const data = await response.json();
  return data.data;
}

export const addContact = async (newContact) => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const mutation = `mutation{
          createContact(input: ${newContact}) {
            clientMutationId
          }
        }`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mutation })
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Error adding a user\'s emergency contact.')
  }

  const data = await response.json();
  return data.data;
}