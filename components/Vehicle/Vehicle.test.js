import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Vehicle } from './Vehicle';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Vehicle', () => {
  let wrapper

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
});