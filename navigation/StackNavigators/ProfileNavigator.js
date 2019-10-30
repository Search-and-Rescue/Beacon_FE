import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Profile from "../../components/Profile/Profile";
import ProfileViewer from "../../components/ProfileViewer/ProfileViewer";

const ProfileStackNavigator = createStackNavigator(
  {
    ProfileViewer: ProfileViewer,
    Profile: Profile
  },
  {
    initialRouteName: "Profile"
  }
);

export default createAppContainer(ProfileStackNavigator);