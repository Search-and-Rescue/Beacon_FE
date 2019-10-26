import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Vehicle from './Vehicle';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Vehicle', () => {

  beforeEach(() => {
    mockVehicle = {
      navigation: {
        state: {
          params: {
            vehicle: {
              id: 1,
              make: "Ford",
              model: "F150",
              year: 2010,
              color: "silver",
              licensePlate: "CYE 909"
            }
        }
      }
    }
  }
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<Vehicle {...mockVehicle}/>)).toMatchSnapshot();
  });
});