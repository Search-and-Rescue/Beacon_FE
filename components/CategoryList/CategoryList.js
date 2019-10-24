import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
// import MenuButton from "../../navigation/MenuButton/MenuButton";

// const CategoryList = (props) => {
//   const { routeName } = props.navigation.state;

export default class CategoryList extends Component {
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