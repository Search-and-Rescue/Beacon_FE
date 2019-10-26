import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { getEmergencyContacts } from '../../util/apiCalls';
import { setEmergencyContacts } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

export class LoginScreen extends Component {
  componentDidMount = async () => {
    try {
      const { setEmergencyContacts } = this.props;
      const userInfo = await getEmergencyContacts();
      await setEmergencyContacts(userInfo.user.emergencyContacts);
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