export const currentTrip = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return action.currentTrip;
    case 'REMOVE_CURRENT':
      return null;
    default:
      return state;
  }
}