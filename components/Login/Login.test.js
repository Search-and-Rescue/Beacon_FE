import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('should create a snapshot of the component with the correct data passed through', () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });
});