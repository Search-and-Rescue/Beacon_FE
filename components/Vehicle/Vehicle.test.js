import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Vehicle, mapStateToProps, mapDispatchToProps } from './Vehicle';
import { configure } from 'enzyme';
import { setVehicles } from '../../actions';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Vehicle', () => {
  let wrapper

  const vehiclesMock = [{
    id: 1,
    make: 'Ford',
    model: 'F150',
    year: 2010,
    color: 'silver',
    licensePlate: 'CYE 909'
  }]
  const userMock = {
    id: 1,
    name: 'Sam Freeman'
  }
  const mockState = {
    user: userMock
  }
  beforeEach(() => {
    mockVehicle = {
      navigation: {
        state: {
          params: {
            vehicle: {
              id: 1,
              make: "Ford",
              model: "F150",
              year: 2010,
              color: "silver",
              licensePlate: "CYE 909"
            }
        }
      }
    }
  }

    wrapper = shallow(<Vehicle {...mockVehicle} />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update make state onChangeText of input', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'Subaru')
    expect(wrapper.state('make')).toEqual('Subaru');
  });

  it('should update model state onChangeText of input', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', 'Impreza')
    expect(wrapper.state('model')).toEqual('Impreza');
  });

  it('should update year state onChangeText of input', () => {
    wrapper.find('TextInput').at(2).simulate('changeText', 2014)
    expect(wrapper.state('year')).toEqual(2014);
  });

  it('should update color state onChangeText of input', () => {
    wrapper.find('TextInput').at(3).simulate('changeText', 'blue')
    expect(wrapper.state('color')).toEqual('blue');
  });

  it('should update licensePlate state onChangeText of input', () => {
    wrapper.find('TextInput').at(4).simulate('changeText', 'ABC123')
    expect(wrapper.state('licensePlate')).toEqual('ABC123');
  });

  it('should update state\'s state onChangeText of input', () => {
    wrapper.find('TextInput').at(5).simulate('changeText', 'CO')
    expect(wrapper.state('state')).toEqual('CO');
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      user: userMock
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