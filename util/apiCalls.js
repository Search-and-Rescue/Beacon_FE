export const getEmergencyContacts = async() => {
  const url = 'https://search-and-rescue-api.herokuapp.com/graphql';
  const query = `query{
    user(id: 1) {
      emergencyContacts {
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