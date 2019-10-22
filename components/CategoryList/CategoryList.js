import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const CategoryList = () => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryList}>
      </View>
      <View style={styles.listItemBtn}>
        <Button title='Add' />
      </View>
    </View>
  )
}

export default CategoryList;