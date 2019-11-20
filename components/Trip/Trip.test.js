import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Trip } from './Trip';
import { configure } from 'enzyme';
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
});