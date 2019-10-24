import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ContactList from '../../components/ContactList/ContactList';
import Contact from "../../components/Contact/Contact";

const ContactStackNavigator = createStackNavigator(
  {
    ContactList: ContactList,
    Contact: Contact
  },
  {
    initialRouteName: "ContactList"
  }
);

export default createAppContainer(ContactStackNavigator);