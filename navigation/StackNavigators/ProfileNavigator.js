import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Profile from "../../components/Profile/Profile";

const ContactStackNavigator = createStackNavigator(
  {
    Profile: Profile
  },
  {
    initialRouteName: "Profile"
  }
);

export default createAppContainer(ProfileStackNavigator);