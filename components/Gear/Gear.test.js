import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { Gear, mapStateToProps, mapDispatchToProps } from "./Gear";
import { configure } from "enzyme";
import { setGear } from '../../actions';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => "TouchableOpacity");

describe("Gear", () => {
  let wrapper

  const gearMock = [
    {
      itemName: 'Sleeping bag',
      description: '0 degrees'
    }
  ]
  const userMock = {
    id: 1,
    name: 'Sam Freeman'
  }
  const mockState = {
    user: userMock
  }
  beforeEach(() => {
    mockProps = {
      navigation: {
        state: {
          params: {
            gear : {
              id: 1,
              gear_name: "tent",
              description: "REI red 2 person"
            }
          }
        }
      }
    }

    wrapper = shallow(<Gear {...mockProps} />)
  });

  it("should match the snapshot with all of the data passed through", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update itemName state onChangeText of input', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'Sleeping bag')
    expect(wrapper.state('itemName')).toEqual('Sleeping bag');
  });

  it('should update description state onChangeText of input', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', 'Mummy bag, 0 degree')
    expect(wrapper.state('description')).toEqual('Mummy bag, 0 degree');
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      user: userMock
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
