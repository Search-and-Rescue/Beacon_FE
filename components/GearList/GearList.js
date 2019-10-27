import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styles from "./styles";

export class GearList extends Component {
  constructor(props) {
    super(props);
  }

  editItem = gear => {
    this.props.navigation.navigate("Gear", { gear });
  };

  render() {
    const itemLinks = this.props.gear.map(gear => {
      return (
        <TouchableOpacity
          key={gear.id}
          style={styles.gearLink}
          onPress={() => this.editItem(gear)}
        >
          <Text style={styles.gearName}>{gear.itemName}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View>
        <View style={styles.gearListContainer}>
          <ScrollView style={styles.gearList}>{itemLinks}</ScrollView>

          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("Gear", {gear:{}})}
          >
            <Text style={styles.addBtnText}>Add a Gear Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ gear }) => ({
  gear
});

export default connect(mapStateToProps)(GearList);
