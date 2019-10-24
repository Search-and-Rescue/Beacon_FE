import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import styles from './styles';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Text>Welcome Screen Page</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button title="Sign Up" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}