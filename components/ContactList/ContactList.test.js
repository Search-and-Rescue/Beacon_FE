import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { ContactList } from './ContactList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

describe('ContactList', () => {
  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<ContactList />)).toMatchSnapshot();
  });
});