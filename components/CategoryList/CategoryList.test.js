import React from 'react';
import CategoryList from './CategoryList';
import { shallow } from 'enzyme';

describe('CategoryList', () => {
  it('should create a snapshot of the component with the correct data passed through', () => {
    expect(shallow(<CategoryList />)).toMatchSnapshot();
  });
});