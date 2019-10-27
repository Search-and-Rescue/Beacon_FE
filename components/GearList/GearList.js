import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styles from "./styles";

export class GearList extends Component {
  constructor(props) {
    super(props);
  }

  deleteItem = id => {
    console.log('in delete gear item', id)
  };

  render() {
    const itemLinks = this.props.gear.map(item => {
      return (
        <View key={item.id} style={styles.gearCard}>
          <Text
            style={styles.itemRemoveBtn}
            onPress={() => this.deleteItem(item.id)}
          >REMOVE</Text>
          <Text style={styles.gearName}>{item.itemName}
          </Text>
        </View>
      );
    });

    return (
      <View>
        <View style={styles.gearListContainer}>
          <ScrollView style={styles.gearList}>
          {itemLinks}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ gear }) => ({
  gear
});

export default connect(mapStateToProps)(GearList);
