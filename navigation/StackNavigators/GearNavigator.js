import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import GearList from "../../components/GearList/GearList";
import Gear from "../../components/Gear/Gear";

const GearStackNavigator = createStackNavigator(
  {
    GearList: GearList,
    Gear: Gear
  },
  {
    initialRouteName: "GearList"
  }
);

export default createAppContainer(GearStackNavigator);