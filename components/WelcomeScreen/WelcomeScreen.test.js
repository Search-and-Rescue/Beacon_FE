import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { LoginScreen, mapDispatchToProps } from './WelcomeScreen';
import { configure } from 'enzyme';
import {
  setEmergencyContacts,
  setVehicles,
  setGear,
  setTrips,
  setUser
} from "../../actions";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LoginScreen', () => {
  const contactsMock = [{
    name: "Beans",
    phone: "303-1234",
    email: "beans@gmail.com"
  }];
  const vehiclesMock = [{
    id: 1,
    make: 'Ford',
    model: 'F150',
    year: 2010,
    color: 'silver',
    licensePlate: 'CYE 909'
  }];
  const gearMock = [{
    id: 89,
    itemName: 'Rustic Iron Bottle',
    description: 'Chuck Norris can binary search unsorted data.'
  }];
  const userMock = {
    id: 1,
    name: 'Sam Freeman'
  }
  const tripsMock = [{
    name: "Trip name",
    startingPoint: "Starting point",
    endingPoint: "Ending point",
    startDate: "December 1, 2019",
    startTime: "09:00",
    endDate: "December 2, 2019",
    endTime: "09:00",
    notificationDate: "December 3, 2019",
    notificationTime: "09:00",
    travelingCompanions: 0,
    userId: 1
  }]

  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<LoginScreen />)).toMatchSnapshot();
  });

  it('it calls dispatch with the setEmergencyContacts action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setEmergencyContacts(contactsMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setEmergencyContacts(contactsMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setVehicles action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setVehicles(vehiclesMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setVehicles(vehiclesMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setGear action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setGear(gearMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setGear(gearMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setUser action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser(userMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(userMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setTrips action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setTrips(tripsMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setTrips(tripsMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});