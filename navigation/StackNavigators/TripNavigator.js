import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import TripList from "../../components/ContactList/ContactList";
import Trip from "../../components/Contact/Contact";

const TripStackNavigator = createStackNavigator(
  {
    TripList: TripList,
    Trip: Trip
  },
  {
    initialRouteName: "TripList"
  }
);

export default createAppContainer(TripStackNavigator);