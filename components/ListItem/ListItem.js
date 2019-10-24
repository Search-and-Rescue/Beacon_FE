import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
          <Text>List Item</Text>
        </View>
      </View>
    );
  }
}