import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('../../navigation/DrawerNavigator/DrawerNavigator', () => 'DrawerNavigator');

describe('App', () => {
  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});