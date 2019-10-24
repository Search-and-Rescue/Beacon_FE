import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryList}></View>
        <Text>Category List Page</Text>
        <View style={styles.listItemBtn}>
          <Button
            title="Add Item"
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("ListItem")}
          />
        </View>
      </View>
    </View>
  );
}
}