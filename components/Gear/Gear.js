import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class Gear extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Text>Gear Page</Text>
          <Button
            title="Update a gear"
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("GearList")}
          />
        </View>
      </View>
    );
  }
}
