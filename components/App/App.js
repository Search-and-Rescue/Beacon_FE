import React, { Component } from "react";
import AppRegistry from "react-native";
import { View, StyleSheet, Text, Button } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "@expo/vector-icons/Ionicons";
import styles from './styles';

import Home from '../../components/Home/Home';
import LoginScreen from '../WelcomeScreen/WelcomeScreen';
import CategoryList from '../../components/CategoryList/CategoryList';
import ListItem from '../../components/ListItem/ListItem';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    CategoryList,
    ListItem
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={40}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Trips: {
    screen: Home
  },
  Contacts: {
    screen: DashboardStackNavigator
  },
  Gear: {
    screen: DashboardStackNavigator
  },
  Vehicles: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);