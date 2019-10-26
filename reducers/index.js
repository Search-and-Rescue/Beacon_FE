import { combineReducers } from 'redux';
import { user } from './user';
import { contacts } from './contacts';
import { currentTrip } from './currentTrip';
import { gear } from './gear';
import { trips } from './trips';
import { vehicles } from './vehicles';

export const rootReducer = combineReducers({
  user,
  contacts,
  currentTrip,
  gear,
  trips,
  vehicles
})