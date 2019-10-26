import React, { Component } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export class GearList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const gearItems = [
        {
          id: 1,
          item_name: "Sleeping Bag",
          description: "REI 0 degree down, hot pink"
        },
        {
          id: 2,
          item_name: "Hiking boots",
          description: "Salomon size 9 winter boots"
        },
        {
          id: 3,
          item_name: "Snowshoes",
          description: "Atlas carbon fiber backcountry"
        },
        {
          id: 4,
          item_name: "Sleeping Bag",
          description: "REI 0 degree down, hot pink"
        },
        {
          id: 5,
          item_name: "Hiking boots",
          description: "Salomon size 9 winter boots"
        },
        {
          id: 6,
          item_name: "Snowshoes",
          description: "Atlas carbon fiber backcountry"
        }
      ];

    editItem = (gear) => {
      this.props.navigation.navigate("Gear", 
      { gear }
      );
    };

    const itemLinks = gearItems.map(gear => {
      return (
        <TouchableOpacity
          key={gear.id}
          style={styles.gearLink}
          onPress={() => this.editItem(gear)}
        >
          <Text style={styles.gearName}>{gear.item_name}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View>
        <View style={styles.gearListContainer}>
          <ScrollView style={styles.gearList}>
            {itemLinks}
          </ScrollView>

          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("Gear")}
          >
            <Text style={styles.addBtnText}>Add a Gear Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GearList;