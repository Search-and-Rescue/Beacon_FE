import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { getEmergencyContacts, getVehicles } from '../../util/apiCalls';
import { setEmergencyContacts, setVehicles } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

export class LoginScreen extends Component {
  componentDidMount = async () => {
    const { setEmergencyContacts, setVehicles } = this.props;
    try {
      const userInfoContacts = await getEmergencyContacts();
      const userInfoVehicles = await getVehicles();
      await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
      await setVehicles(userInfoVehicles.user.vehicles)
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

export const mapDispatchToProps = dispatch => bindActionCreators({ setEmergencyContacts }, dispatch);

export default connect(null, mapDispatchToProps)(LoginScreen);