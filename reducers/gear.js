export const gear = (state = [], action) => {
  switch (action.type) {
    case 'SET_GEAR':
      return action.gear;
    default:
      return state;
  }
}