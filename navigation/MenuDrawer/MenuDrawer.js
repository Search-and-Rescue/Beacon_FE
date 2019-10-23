import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  TouchableOpacity
} from "react-native";
import icon from '../../assets/icon.png';
import styles from './styles';

export default class MenuDrawer extends React.Component {
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
        <ScrollView style={styles.scroller}>
          <View style={styles.topLinks}>
            <View style={styles.profile}>
              <View style={styles.imgView}>
                <Image
                  style={styles.img}
                  source={icon}
                />
              </View>
              <View style={styles.profileText}>
                <Text style={styles.name}>Beacon</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>
            {this.navLink("Home", "Home")}
            {this.navLink("Contacts", "Contacts")}
            {this.navLink("Gear", "Gear List")}
            {this.navLink("Vehicles", "Vehicles")}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>Menu Tutorial</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>
      </View>
    );
  }
}