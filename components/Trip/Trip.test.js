import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Trip from './Trip';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock("react-native-gesture-handler", () => "TouchableOpacity");

describe('Trip', () => {

  beforeEach(() => {
    mockProps = {
      navigation: {
        state: {
          params: {
            gearArray: {
              id: 1,
              gear_name: "tent",
              description: "REI red 2 person"
            }
          }
        }
      }
    };
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<Trip {...mockProps}/>)).toMatchSnapshot();
  });
});