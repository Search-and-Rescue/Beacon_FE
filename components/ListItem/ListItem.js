import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Button title='Add' />
        </View>
      </View>
    )
  }
}

export default ListItem;