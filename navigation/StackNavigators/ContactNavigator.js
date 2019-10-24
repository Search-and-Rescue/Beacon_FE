import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoryList from "../../components/CategoryList/CategoryList";
import ListItem from "../../components/ListItem/ListItem";

const ContactStackNavigator = createStackNavigator(
  {
    CategoryList: CategoryList,
    ListItem: ListItem
  },
  {
    initialRouteName: "CategoryList"
  }
);

export default createAppContainer(ContactStackNavigator);