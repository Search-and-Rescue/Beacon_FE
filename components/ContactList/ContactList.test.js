import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { ContactList, mapStateToProps, mapDispatchToProps } from './ContactList';
import { configure } from 'enzyme';
import { setEmergencyContacts } from "../../actions";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-native-gesture-handler', () => 'TouchableOpacity');

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

describe('ContactList', () => {
  let wrapper;
  const contactsMock = [{
    name: "Beans",
    phone: "303-1234",
    email: "beans@gmail.com"
  }];
  const mockState = {
    contacts: contactsMock
  }

  beforeEach(() => {
    const mockContacts = [{
      name: "Beans",
      phone: "303-1234",
      email: "beans@gmail.com"
    }];

    wrapper = shallow(<ContactList
      contacts={mockContacts}
      />);
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      contacts: contactsMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setEmergencyContacts action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setEmergencyContacts(contactsMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setEmergencyContacts(contactsMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});