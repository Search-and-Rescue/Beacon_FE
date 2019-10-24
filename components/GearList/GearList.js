import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class GearList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryList}></View>
          <Text>Gear List Page</Text>
          <View style={styles.listItemBtn}>
            <Button
              title="Go to a Gear"
              style={styles.addItemBtn}
              onPress={() => this.props.navigation.navigate("Gear")}
            />
          </View>
        </View>
      </View>
    );
  }
}
