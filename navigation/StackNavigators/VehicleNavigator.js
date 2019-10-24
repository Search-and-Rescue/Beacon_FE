import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import VehicleList from "../../components/VehicleList/VehicleList";
import Vehicle from "../../components/Vehicle/Vehicle";

const VehicleStackNavigator = createStackNavigator(
  {
    VehicleList: VehicleList,
    Vehicle: Vehicle
  },
  {
    initialRouteName: "VehicleList"
  }
);

export default createAppContainer(VehicleStackNavigator);