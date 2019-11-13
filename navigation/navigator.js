import React from "react";
import { Image, Text } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "@expo/vector-icons/Ionicons";
import tent from '../assets/tent.png';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import DrawerHeader from '../navigation/DrawerHeader/DrawerHeader';

import TripList from '../components/TripList/TripList';
import Trip from '../components/Trip/Trip';
import LoginScreen from '../components/WelcomeScreen/WelcomeScreen';
import ProfileViewer from '../components/ProfileViewer/ProfileViewer';
import Profile from '../components/Profile/Profile';
import ContactList from '../components/ContactList/ContactList';
import Contact from '../components/Contact/Contact';
import GearList from '../components/GearList/GearList';
import Gear from '../components/Gear/Gear';
import VehicleList from '../components/VehicleList/VehicleList';
import Vehicle from '../components/Vehicle/Vehicle';

const TripDashboardTabNavigator = createBottomTabNavigator(
  {
    TripList,
    Trip
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TripList") {
          iconName = "car";
        } else if (routeName === "Trip") {
          iconName = "tent";
        }
        return (
          <>
            <Image
              source={tent}
              style={{ width: 25, height: 25, margin: 5 }}
              color={tintColor}
            />
            <FontAwesomeIcon icon={faCoffee} />
          </>
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        labelPosition: "beside-icon",
        labelStyle: {
          fontFamily: "Futura",
          fontSize: 20
        },
        tabStyle: {
          width: 100
        },
        style: {
          backgroundColor: "#001028"
        }
      }
    })
  }
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       headerTitle: routeName
  //     }
  //   },
  //   tabBarOptions: {
  //     activeTintColor: "#EFB095",
  //     inactiveTintColor: "#F0F0F0",
  //     labelStyle: {
  //       fontFamily: "Futura",
  //       fontSize: 21,
  //       paddingBottom: 7
  //     },
  //     tabStyle: {
  //       width: 100
  //     },
  //     style: {
  //       backgroundColor: "#001028"
  //     }
  //   }
  // }
);

const ProfileDashboardTabNavigator = createBottomTabNavigator(
  {
    ProfileViewer,
    Profile
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: "#EFB095",
      inactiveTintColor: "#F0F0F0",
      labelStyle: {
        fontFamily: "Futura",
        fontSize: 21,
        paddingBottom: 7
      },
      tabStyle: {
        width: 100
      },
      style: {
        backgroundColor: "#001028"
      }
    }
  }
);

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
    },
    tabBarOptions: {
      activeTintColor: "#EFB095",
      inactiveTintColor: "#F0F0F0",
      labelStyle: {
        fontFamily: "Futura",
        fontSize: 21,
        paddingBottom: 7
      },
      tabStyle: {
        width: 100
      },
      style: {
        backgroundColor: "#001028"
      }
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
    },
    tabBarOptions: {
      activeTintColor: "#EFB095",
      inactiveTintColor: "#F0F0F0",
      labelStyle: {
        fontFamily: "Futura",
        fontSize: 21,
        paddingBottom: 7
      },
      tabStyle: {
        width: 100
      },
      style: {
        backgroundColor: "#001028"
      }
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
    },
    tabBarOptions: {
      activeTintColor: "#EFB095",
      inactiveTintColor: "#F0F0F0",
      labelStyle: {
        fontFamily: "Futura",
        fontSize: 21,
        paddingBottom: 7
      },
      tabStyle: {
        width: 100
      },
      style: {
        backgroundColor: "#001028"
      }
    }
  }
);

const ProfileStackNavigator = createStackNavigator(
  {
    ProfileDashboardTabNavigator: ProfileDashboardTabNavigator
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

const TripStackNavigator = createStackNavigator(
  {
    TripDashboardTabNavigator: TripDashboardTabNavigator
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

const DrawerConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "white"
    }
  },
  contentOptions: {
    inactiveTintColor: "#001028",
    activeTintColor: "#F4813F",
    itemsContainerStyle: {
      marginVertical: 20
    },
    labelStyle: {
      fontSize: 21
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    "My Trips": {
      screen: TripStackNavigator,
    },
    "My Profile": {
      screen: ProfileStackNavigator
    },
    "My Emergency Contacts": {
      screen: ContactStackNavigator
    },
    "My Gear": {
      screen: GearStackNavigator
    },
    "My Vehicles": {
      screen: VehicleStackNavigator
    }
  },
  DrawerConfig
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export const AppContainer = createAppContainer(AppSwitchNavigator);