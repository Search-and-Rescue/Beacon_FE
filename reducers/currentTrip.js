export const currentTrip = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return {id: action.currentId, name: action.currentName};
    case 'REMOVE_CURRENT':
      return null;
    default:
      return state;
  }
}