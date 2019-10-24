import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button title="Sign Up" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}
