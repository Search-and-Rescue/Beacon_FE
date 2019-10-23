import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import icon from '../../assets/icon.png';
import styles from './styles';

export default class MenuDrawer extends Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topLinks}>
            <View style={styles.header}>
              <View style={styles.headerImage}>
                <Image
                  style={styles.image}
                  source={icon}
                />
              </View>
              <View style={styles.headerText}>
                <Text style={styles.headerName}>Beacon</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>
            {this.navLink("Home", "Trips")}
            {this.navLink("Contacts", "Contacts")}
            {this.navLink("Gear", "Gear List")}
            {this.navLink("Vehicles", "Vehicles")}
          </View>
        <View style={styles.footer}>
          <Text style={styles.resources}>Resources</Text>
        </View>
      </View>
    );
  }
}