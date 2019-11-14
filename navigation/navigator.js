import React from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View, } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "@expo/vector-icons/Ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faListUl,
  faCampground,
  faCar,
  faHiking,
  faUserCog,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

import TripList from "../components/TripList/TripList";
import Trip from "../components/Trip/Trip";
import LoginScreen from "../components/WelcomeScreen/WelcomeScreen";
import ProfileViewer from "../components/ProfileViewer/ProfileViewer";
import Profile from "../components/Profile/Profile";
import ContactList from "../components/ContactList/ContactList";
import Contact from "../components/Contact/Contact";
import GearList from "../components/GearList/GearList";
import Gear from "../components/Gear/Gear";
import VehicleList from "../components/VehicleList/VehicleList";
import Vehicle from "../components/Vehicle/Vehicle";

const TripDashboardTabNavigator = createBottomTabNavigator(
  {
    TripList,
    Trip
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TripList") {
          iconName = faListUl;
        } else if (routeName === "Trip") {
          iconName = faHiking;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            size={26}
            style={{ color: tintColor, marginTop: 20 }}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        style: {
          backgroundColor: "#001028"
        }
      }
    })
  }
);

const ProfileDashboardTabNavigator = createBottomTabNavigator(
  {
    ProfileViewer,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "ProfileViewer") {
          iconName = faListUl;
        } else if (routeName === "Profile") {
          iconName = faUserCog;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            size={26}
            style={{ color: tintColor, marginTop: 20 }}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        style: {
          backgroundColor: "#001028"
        }
      }
    })
  }
);

const ContactDashboardTabNavigator = createBottomTabNavigator(
  {
    ContactList,
    Contact
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "ContactList") {
          iconName = faListUl;
        } else if (routeName === "Contact") {
          iconName = faUsers;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            size={26}
            style={{ color: tintColor, marginTop: 20 }}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        style: {
          backgroundColor: "#001028"
        }
      }
    })
  }
);

const GearDashboardTabNavigator = createBottomTabNavigator(
  {
    GearList,
    Gear
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "GearList") {
          iconName = faListUl;
        } else if (routeName === "Gear") {
          iconName = faCampground;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            size={26}
            style={{ color: tintColor, marginTop: 20 }}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        style: {
          backgroundColor: "#001028"
        }
      }
    })
  }
);

const VehicleDashboardTabNavigator = createBottomTabNavigator(
  {
    VehicleList,
    Vehicle
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "VehicleList") {
          iconName = faListUl;
        } else if (routeName === "Vehicle") {
          iconName = faCar;
        }
        return (
          <FontAwesomeIcon
            icon={iconName}
            size={26}
            style={{ color: tintColor, marginTop: 20 }}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#EFB095",
        inactiveTintColor: "#F0F0F0",
        style: {
          backgroundColor: "#001028"
        }
      }
    })
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
  contentComponent: props => (
    <View style={{ flex: 1 }}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerItems {...props} />
        <TouchableOpacity
          style={{ backgroundColor: "#001028", height: 55 }}
          onPress={() =>
            Alert.alert(
              "Log out",
              "Do you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  }
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    props.navigation.navigate("LoginScreen");
                  }
                }
              ],
              { cancelable: false }
            )
          }
        >
          <Text
            style={{ color: "#efefef", fontFamily: "Futura-Medium", fontSize: 21, paddingLeft: 16, paddingVertical: 10 }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  ),
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "white"
    }
  },
  drawerType: 'slide',
  contentOptions: {
    inactiveTintColor: "#001028",
    activeTintColor: "#F4813F",
    itemsContainerStyle: {
      marginVertical: 20
    },
    labelStyle: {
      fontSize: 21,
      marginLeft: 0
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
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return (
            <FontAwesomeIcon
              icon={faHiking}
              size={36}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    "My Profile": {
      screen: ProfileStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return (
            <FontAwesomeIcon
              icon={faUserCog}
              size={36}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    "My Emergency Contacts": {
      screen: ContactStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return (
            <FontAwesomeIcon
              icon={faUsers}
              size={36}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    "My Gear": {
      screen: GearStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return (
            <FontAwesomeIcon
              icon={faCampground}
              size={36}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    "My Vehicles": {
      screen: VehicleStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => {
          return (
            <FontAwesomeIcon
              icon={faCar}
              size={36}
              style={{ color: tintColor }}
            />
          );
        }
      }
    }
  },
  DrawerConfig
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export const AppContainer = createAppContainer(AppSwitchNavigator);
