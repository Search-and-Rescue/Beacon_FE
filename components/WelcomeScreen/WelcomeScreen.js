import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { getEmergencyContacts, getVehicles, getGear } from '../../util/apiCalls';
import { setEmergencyContacts, setVehicles, setGear } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

export class LoginScreen extends Component {
  componentDidMount = async () => {
    const { setEmergencyContacts, setVehicles, setGear } = this.props;
    try {
      const userInfoContacts = await getEmergencyContacts();
      const userInfoVehicles = await getVehicles();
      const userInfoGear = await getGear();
      await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
      await setVehicles(userInfoVehicles.user.vehicles);
      await setGear(userInfoGear.user.gear);
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

export const mapDispatchToProps = dispatch => bindActionCreators({ setEmergencyContacts, setVehicles, setGear }, dispatch);

export default connect(null, mapDispatchToProps)(LoginScreen);