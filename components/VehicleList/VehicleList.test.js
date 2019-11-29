import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { VehicleList, mapStateToProps, mapDispatchToProps } from './VehicleList';
import { configure } from 'enzyme';
import { setVehicles } from "../../actions";
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

configure({ adapter: new Adapter() });

describe('VehicleList', () => {
  let wrapper;
  const vehiclesMock = [{
    id: 1,
    make: 'Ford',
    model: 'F150',
    year: 2010,
    color: 'silver',
    licensePlate: 'CYE 909'
  }];
  const mockState = {
    vehicles: vehiclesMock
  }

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

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      vehicles: vehiclesMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setVehicles action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setVehicles(vehiclesMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setVehicles(vehiclesMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});