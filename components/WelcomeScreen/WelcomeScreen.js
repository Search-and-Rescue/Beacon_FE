import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

export default class LoginScreen extends Component {
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