import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

import MenuButton from "../../navigation/MenuButton/MenuButton";

const CategoryList = (props) => {
  return (
    <View style={styles.categoryContainer}>
      <MenuButton navigation={props.navigation} />
      <View style={styles.categoryList}></View>
      <View style={styles.listItemBtn}>
        <Button title="Add" />
      </View>
    </View>
  );
}

export default CategoryList;