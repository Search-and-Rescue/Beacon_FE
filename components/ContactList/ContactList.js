import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryList}></View>
          <Text>Contact List Page</Text>
          <View style={styles.listItemBtn}>
            <Button
              title="Go to a Contact"
              style={styles.addItemBtn}
              onPress={() => this.props.navigation.navigate("Contact")}
            />
          </View>
        </View>
      </View>
    );
  }
}
