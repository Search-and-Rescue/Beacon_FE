import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { getEmergencyContacts, getVehicles, getGear, getTrips, getUser } from '../../util/apiCalls';
import { setEmergencyContacts, setVehicles, setGear, setTrips, setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

export class LoginScreen extends Component {
  componentDidMount = async () => {
    const { setEmergencyContacts, setVehicles, setGear, setUser } = this.props;
    try {
      const userInfoContacts = await getEmergencyContacts();
      const userInfoVehicles = await getVehicles();
      const userInfoGear = await getGear();
      const userInfoTrips = await getTrips();
      const userInfo = await getUser();
      await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
      await setVehicles(userInfoVehicles.user.vehicles);
      await setGear(userInfoGear.user.gear);
      await setTrips(userInfoTrips.user.trips)
      await setUser(userInfo.user);
    } catch ({ message }) {
      console.log(message)
    }
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapDispatchToProps = dispatch => bindActionCreators({ setEmergencyContacts, setVehicles, setGear, setUser }, dispatch);

export default connect(null, mapDispatchToProps)(LoginScreen);