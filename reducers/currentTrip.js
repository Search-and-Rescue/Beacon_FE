export const currentTrip = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return {id: action.currentId, name: action.currentName};
    case 'REMOVE_CURRENT':
      return {};
    default:
      return state;
  }
}