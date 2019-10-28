import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Trip } from './Trip';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
      {...mockProps} />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});