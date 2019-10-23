import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('should create a snapshot of the component with the correct data passed through', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});