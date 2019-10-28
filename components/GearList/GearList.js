import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { getGear, deleteGearItem } from "../../util/apiCalls";
import { connect } from "react-redux";
import styles from "./styles";
import { setGear } from "../../actions";
import { bindActionCreators } from "redux";

export class GearList extends Component {
  constructor(props) {
    super(props);
  }

  deleteItem = async id => {
    await deleteGearItem(id);
    const userInfoGear = await getGear();
    console.log('in del gear item', userInfoGear);

  };

  render() {
    const itemCards = this.props.gear.map(item => {
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
          {itemCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ gear }) => ({
  gear
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setGear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GearList);
