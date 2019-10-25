import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "@expo/vector-icons/Ionicons";

import Home from '../components/Home/Home';
import LoginScreen from '../components/WelcomeScreen/WelcomeScreen';
import CategoryList from '../components/CategoryList/CategoryList';
import ListItem from '../components/ListItem/ListItem';
import Profile from '../components/Profile/Profile';
import ContactList from '../components/ContactList/ContactList';
import Contact from '../components/Contact/Contact';
import GearList from '../components/GearList/GearList';
import Gear from '../components/Gear/Gear';
import VehicleList from '../components/VehicleList/VehicleList';
import Vehicle from '../components/Vehicle/Vehicle';

const ContactDashboardTabNavigator = createBottomTabNavigator(
  {
    ContactList,
    Contact
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

const GearDashboardTabNavigator = createBottomTabNavigator(
  {
    GearList,
    Gear
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

const VehicleDashboardTabNavigator = createBottomTabNavigator(
  {
    VehicleList,
    Vehicle
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

const GearStackNavigator = createStackNavigator(
  {
    GearDashboardTabNavigator: GearDashboardTabNavigator
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

const ContactStackNavigator = createStackNavigator(
  {
    ContactDashboardTabNavigator: ContactDashboardTabNavigator
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

const VehicleStackNavigator = createStackNavigator(
  {
    VehicleDashboardTabNavigator: VehicleDashboardTabNavigator
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
  Profile: {
    screen: Profile
  },
  Contacts: {
    screen: ContactStackNavigator
  },
  Gear: {
    screen: GearStackNavigator
  },
  Vehicles: {
    screen: VehicleStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export const AppContainer = createAppContainer(AppSwitchNavigator);