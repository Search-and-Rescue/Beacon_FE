import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './Contact';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Contact', () => {
  let wrapper

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

    wrapper = shallow(<Contact {...mockContact} />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name state onChangeText of input', () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'Sam Freeman')
    expect(wrapper.state('name')).toEqual('Sam Freeman');
  });

  it('should update phone state onChangeText of input', () => {
    wrapper.find('TextInput').at(1).simulate('changeText', '(303)123-4567')
    expect(wrapper.state('phone')).toEqual('(303)123-4567');
  });

  it('should update email state onChangeText of input', () => {
    wrapper.find('TextInput').at(2).simulate('changeText', 'test@email.com')
    expect(wrapper.state('email')).toEqual('test@email.com');
  });
});