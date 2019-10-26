import "react-native";
import React from "react";
import { shallow } from "enzyme";
import Gear from "./Gear";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => "TouchableOpacity");

describe("Gear", () => {

  let wrapper, mockGear;
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
  });

  it("should match the snapshot with all of the data passed through", () => {
    expect(shallow(<Gear {...mockProps}/>)).toMatchSnapshot();
  });
});
