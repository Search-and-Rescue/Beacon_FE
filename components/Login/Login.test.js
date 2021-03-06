import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login', () => {
  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });
});