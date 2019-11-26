import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Trip, mapStateToProps, mapDispatchToProps } from './Trip';
import { configure } from 'enzyme';
import { setTrips, setCurrentTrip } from '../../actions';
import Adapter from 'enzyme-adapter-react-16';

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

configure({ adapter: new Adapter() });

jest.mock("react-native-gesture-handler", () => "TouchableOpacity");

describe('Trip', () => {
  let wrapper;
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
  const currentTripMock = {
    id: 1,
    name: "Trip name"
  }
  const userMock = {
    id: 1,
    name: 'Sam Freeman'
  }
  const tripMock = {
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
  }
  const mockState = {
    contacts: contactsMock,
    vehicles: vehiclesMock,
    gear: gearMock,
    user: userMock,
    currentTrip: currentTripMock
  }

  beforeEach(() => {
    mockProps = {
      navigation: {
        state: {
          params: {
            gearArray: {
              id: 1,
              gear_name: "tent",
              description: "REI red 2 person"
            }
          }
        }
      }
    };

    wrapper = shallow(<Trip 
      contacts={contactsMock}
      vehicles={vehiclesMock}
      gear={gearMock}
      currentTrip={currentTripMock}
      {...mockProps} />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    const mockDateTime = new Date(2019, 11, 20, 18, 30, 30, 0)
    wrapper.setState({ 
      startDate: mockDateTime, 
      startTime: mockDateTime,
      endDate: mockDateTime,
      endTime: mockDateTime,
      notificationDate: mockDateTime,
      notificationTime: mockDateTime
    })
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name state onChangeText of input', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'Trip name')
    expect(wrapper.state('name')).toEqual('Trip name');
  });

  it('should update startingPoint state onChangeText of input', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', 'Start point')
    expect(wrapper.state('startingPoint')).toEqual('Start point');
  });

  it('should update endingPoint state onChangeText of input', () => {
    wrapper.find('TextInput').at(2).simulate('changeText', 'End point')
    expect(wrapper.state('endingPoint')).toEqual('End point');
  });

  it('should update travelingCompanions state onChangeText of input', () => {
    wrapper.find('TextInput').at(3).simulate('changeText', 0)
    expect(wrapper.state('travelingCompanions')).toEqual(0);
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      contacts: contactsMock,
      vehicles: vehiclesMock,
      gear: gearMock,
      user: userMock,
      currentTrip: currentTripMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setTrips action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setTrips(tripMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setTrips(tripMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setCurrentTrip action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setCurrentTrip(1, "Trip Name");
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentTrip(1, "Trip Name");

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});