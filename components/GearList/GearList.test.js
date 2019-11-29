import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { GearList, mapStateToProps, mapDispatchToProps } from './GearList';
import { configure } from 'enzyme';
import { setGear } from '../../actions';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

describe('GearList', () => {
  let wrapper;
  const gearMock = [{
    id: 89,
    itemName: 'Rustic Iron Bottle',
    description: 'Chuck Norris can binary search unsorted data.'
  }];
  const mockState = {
    gear: gearMock
  }

  beforeEach(() => {
    const mockGear = [{
      id: 89,
      itemName: 'Rustic Iron Bottle',
      description: 'Chuck Norris can binary search unsorted data.'
    }];

    wrapper = shallow(<GearList
      gear={mockGear}
    />);
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      gear: gearMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setGear action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setGear(gearMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setGear(gearMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});