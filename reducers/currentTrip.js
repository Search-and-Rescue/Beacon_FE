export const currentTrip = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return action.currentTrip;
    default:
      return state;
  }
}