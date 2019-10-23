import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';

export default class MenuButton extends Component {
  render() {
    return (
      <Ionicons
        name="md-menu"
        color="#000000"
        size={32}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
}