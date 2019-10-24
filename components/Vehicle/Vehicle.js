import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Text>Vehicle Page</Text>
          <Button
            title="Update a vehicle"
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("VehicleList")}
          />
        </View>
      </View>
    );
  }
}
