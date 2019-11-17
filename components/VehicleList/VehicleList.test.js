import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { VehicleList } from './VehicleList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

configure({ adapter: new Adapter() });

describe('VehicleList', () => {
  let wrapper;

  beforeEach(() => {
    const mockVehicles = [{
      id: 1,
      make: 'Ford',
      model: 'F150',
      year: 2010,
      color: 'silver',
      licensePlate: 'CYE 909'
    }];

    wrapper = shallow(<VehicleList
      vehicles={mockVehicles}
    />);
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});