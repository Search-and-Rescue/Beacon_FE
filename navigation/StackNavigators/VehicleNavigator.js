import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoryList from "../../components/CategoryList/CategoryList";
import ListItem from "../../components/ListItem/ListItem";

const VehicleStackNavigator = createStackNavigator(
  {
    CategoryList: CategoryList,
    ListItem: ListItem
  },
  {
    initialRouteName: "CategoryList"
  }
);

export default createAppContainer(VehicleStackNavigator);