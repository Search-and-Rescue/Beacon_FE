import React, { Component } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { getGear, deleteGearItem } from "../../util/apiCalls";
import { connect } from "react-redux";
import { setGear } from "../../actions";
import { bindActionCreators } from "redux";

import styles from "./styles";
import background from "../../assets/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";

export class GearList extends Component {
  constructor(props) {
    super(props);
  }

  deleteItem = async id => {
    try {
      await deleteGearItem(id);
      const userInfoGear = await getGear();
      await this.props.setGear(userInfoGear.user.gear);
    } catch ({ message }) {
      console.log(message)
    }
  };

  render() {
    const itemCards = this.props.gear.map(item => {
      return (
        <View key={item.id} style={styles.gearCard}>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onPress={() => this.deleteItem(item.id)}
            size={36}
            style={styles.itemRemoveBtn}
          />
          <Text style={styles.gearName}>{item.itemName}</Text>
        </View>
      );
    });

    return (
      <View>
        <View style={styles.gearListContainer}>
          <ImageBackground source={background} style={styles.backgroundImage} imageStyle={{opacity: 0.2}}>
          <ScrollView style={styles.gearList}>
          {itemCards}
          </ScrollView>
          </ImageBackground>
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
