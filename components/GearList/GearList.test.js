import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import GearList from './GearList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

describe('GearList', () => {
  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<GearList />)).toMatchSnapshot();
  });
});