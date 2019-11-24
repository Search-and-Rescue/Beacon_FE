import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Profile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Profile />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name state onChangeText of input', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'Sam Freeman')
    expect(wrapper.state('name')).toEqual('Sam Freeman');
  });

  it('should update address state onChangeText of input', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', '1234 West K Street')
    expect(wrapper.state('address')).toEqual('1234 West K Street');
  });

  it('should update city state onChangeText of input', () => {
    wrapper.find('TextInput').at(2).simulate('changeText', 'Lone Tree')
    expect(wrapper.state('city')).toEqual('Lone Tree');
  });

  it('should update state state onChangeText of input', () => {
    wrapper.find('TextInput').at(3).simulate('changeText', 'Colorado')
    expect(wrapper.state('state')).toEqual('Colorado');
  });

  it('should update zip state onChangeText of input', () => {
    wrapper.find('TextInput').at(4).simulate('changeText', 80124)
    expect(wrapper.state('zip')).toEqual(80124);
  });

  it('should update phone state onChangeText of input', () => {
    wrapper.find('TextInput').at(5).simulate('changeText', '303-123-4567')
    expect(wrapper.state('phone')).toEqual('303-123-4567');
  });

  it('should update email state onChangeText of input', () => {
    wrapper.find('TextInput').at(6).simulate('changeText', 'test@gmail.com')
    expect(wrapper.state('email')).toEqual('test@gmail.com');
  });

  it('should update birthdate state onChangeText of input', () => {
    wrapper.find('TextInput').at(7).simulate('changeText', 'December 5, 1980')
    expect(wrapper.state('birthdate')).toEqual('December 5, 1980');
  });

  it('should update password_digest state onChangeText of input', () => {
    wrapper.find('TextInput').at(8).simulate('changeText', 'password')
    expect(wrapper.state('password_digest')).toEqual('password');
  });

  it('should update allergies state onChangeText of input', () => {
    wrapper.find('TextInput').at(9).simulate('changeText', 'amoxicillin')
    expect(wrapper.state('allergies')).toEqual('amoxicillin');
  });

  it('should update height state onChangeText of input', () => {
    wrapper.find('TextInput').at(10).simulate('changeText', '5 04')
    expect(wrapper.state('height')).toEqual('5 04');
  });

  it('should update weight state onChangeText of input', () => {
    wrapper.find('TextInput').at(11).simulate('changeText', 130)
    expect(wrapper.state('weight')).toEqual(130);
  });

  it('should update hair_color state onChangeText of input', () => {
    wrapper.find('TextInput').at(12).simulate('changeText', 'Brown')
    expect(wrapper.state('hair_color')).toEqual('Brown');
  });

  it('should update skin_color state onChangeText of input', () => {
    wrapper.find('TextInput').at(13).simulate('changeText', 'Pale')
    expect(wrapper.state('skin_color')).toEqual('Pale');
  });

  it('should update gender state onChangeText of input', () => {
    wrapper.find('TextInput').at(14).simulate('changeText', 'F')
    expect(wrapper.state('gender')).toEqual('F');
  });
});