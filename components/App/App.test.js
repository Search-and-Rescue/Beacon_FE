import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should create a snapshot of the component with the correct data passed through', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});