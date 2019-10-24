import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import MenuButton from "../../navigation/MenuButton/MenuButton";

const CategoryList = (props) => {
  const { routeName } = props.navigation.state;
  return (
    <View>
      <MenuButton navigation={props.navigation} />
      <View style={styles.categoryContainer}>
        <View style={styles.categoryList}></View>
        <View style={styles.listItemBtn}>
          <TouchableOpacity title="Add Item">
            <Text style={styles.addItemBtn}>{`Add ${routeName}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CategoryList;