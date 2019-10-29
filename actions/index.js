export const setUser = user => ({
  type: 'SET_USER',
  user
})

export const setEmergencyContacts = contacts => ({
  type: 'SET_CONTACTS',
  contacts
})

export const setVehicles = vehicles => ({
  type: 'SET_VEHICLES',
  vehicles
})

export const setGear = gear => ({
  type: 'SET_GEAR',
  gear
})

export const setTrips = trips => ({
  type: 'SET_TRIPS',
  trips
})

export const setCurrentTrip = currentTrip => ({
  type: 'SET_CURRENT',
  currentTrip
})

export const removeCurrentTrip = () => ({
  type: 'REMOVE_CURRENT'
})
