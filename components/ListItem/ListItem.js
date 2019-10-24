import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Text>List Item Page</Text>
          <Button
            title="Update"
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("CategoryList")}
          />
        </View>
      </View>
    );
  }
}