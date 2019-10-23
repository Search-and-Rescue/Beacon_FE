import React from 'react';
import ListItem from './ListItem';
import { shallow } from 'enzyme';

describe('ListItem', () => {
  it('should create a snapshot of the component with the correct data passed through', () => {
    expect(shallow(<ListItem />)).toMatchSnapshot();
  });
});