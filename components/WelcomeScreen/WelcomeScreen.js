import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import {
  getEmergencyContacts,
  getVehicles,
  getGear,
  getTrips,
  getUser
} from "../../util/apiCalls";
import {
  setEmergencyContacts,
  setVehicles,
  setGear,
  setTrips,
  setUser
} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";

export class LoginScreen extends Component {
  storeToken = async (key, value) => {  
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('storeToken error', error)
    }
  };

  retrieveToken = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('retrieveData error', error)
    }
  };

  clearToken = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log("clearToken error", error);
    }
  }; 

  componentDidMount = async () => {
    await this.storeToken('token', 'token object goes here');
    await this.retrieveToken('token');
    await this.clearToken('token');
    await this.retrieveToken('token');
    const {
      setEmergencyContacts,
      setVehicles,
      setGear,
      setUser,
      setTrips
    } = this.props;
    try {
      const userInfoContacts = await getEmergencyContacts();
      const userInfoVehicles = await getVehicles();
      const userInfoGear = await getGear();
      const userInfoTrips = await getTrips();
      const userInfo = await getUser();
      await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
      await setVehicles(userInfoVehicles.user.vehicles);
      await setGear(userInfoGear.user.gear);
      await setTrips(userInfoTrips.user.trips);
      await setUser(userInfo.user);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setEmergencyContacts, setVehicles, setGear, setUser, setTrips },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LoginScreen);
