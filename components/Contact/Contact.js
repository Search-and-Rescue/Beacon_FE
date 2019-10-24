import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Text>Contact Page</Text>
          <Button
            title="Update a contact"
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("ContactList")}
          />
        </View>
      </View>
    );
  }
}
