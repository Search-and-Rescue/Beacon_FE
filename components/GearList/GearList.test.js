import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import GearList from './GearList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

describe('GearList', () => {
  let wrapper;

  beforeEach(() => {
    const mockGear = [
      {
        id: 1,
        item_name: "Sleeping bag",
        description: "REI pink 0 degree down"
      }
    ]
    wrapper = shallow(<GearList 
      gear={mockGear}
    />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});