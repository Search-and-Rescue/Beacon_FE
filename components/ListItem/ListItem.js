import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const ListItem = () => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemBtn}>
        <Button title='Add' />
      </View>
    </View>
  )
}

export default ListItem;