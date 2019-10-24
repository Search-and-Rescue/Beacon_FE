import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './CategoryList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('../../navigation/MenuButton/MenuButton', () => 'MenuButton');

const categoryMock = {
  navigation: {
    state: {
      routeName: 'Profile'
    }
  }
}

describe('CategoryList', () => {
  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<CategoryList {...categoryMock}/>)).toMatchSnapshot();
  });
});
