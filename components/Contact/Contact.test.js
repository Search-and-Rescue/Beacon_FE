import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Contact', () => {

  beforeEach(() => {
    mockContact = {
      navigation: {
        state: {
          params: {
            contact: {
              id: 1,
              name: "Mom",
              phone: "123 456 7890",
              email: "mom@email.com"
            }
          }
        }
      }
    };
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(shallow(<Contact {...mockContact}/>)).toMatchSnapshot();
  });
});