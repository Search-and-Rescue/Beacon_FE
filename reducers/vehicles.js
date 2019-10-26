export const vehicles = (state = [], action) => {
  switch (action.type) {
    case 'SET_VEHICLES':
      return action.vehicles;
    default:
      return state;
  }
}