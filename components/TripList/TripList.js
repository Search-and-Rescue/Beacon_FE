import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class TripList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.tripContainer}>
          <View style={styles.categoryList}></View>
          <Text>Trip List Page</Text>
          <View style={styles.listItemBtn}>
            <Button
              title="Go to a Trip"
              style={styles.addItemBtn}
              onPress={() => this.props.navigation.navigate("Trip")}
            />
          </View>
        </View>
      </View>
    );
  }
}
