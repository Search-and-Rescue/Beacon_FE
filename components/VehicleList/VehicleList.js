import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryList}></View>
          <Text>Vehicle List Page</Text>
          <View style={styles.listItemBtn}>
            <Button
              title="Go to a Vehicle"
              style={styles.addItemBtn}
              onPress={() => this.props.navigation.navigate("Vehicle")}
            />
          </View>
        </View>
      </View>
    );
  }
}
