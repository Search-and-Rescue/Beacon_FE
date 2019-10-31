import React, { Component } from "react";
import { ImageBackground, View, Text, ScrollView } from "react-native";
import { deleteVehicle, getVehicles } from "../../util/apiCalls";
import { connect } from "react-redux";
import styles from "./styles";
import { setVehicles } from "../../actions";
import { bindActionCreators } from "redux";
import background from '../../assets/background.png';

export class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  deleteVehicle = async (id) => {
    try {
      await deleteVehicle(id);
      const userInfoVehicles = await getVehicles();
      this.props.setVehicles(userInfoVehicles.user.vehicles);
    } catch ({message}) {
      console.log(message)
    }
  }

  render() {
    const vehicleCards = this.props.vehicles.map(vehicle => {
      return (
        <View key={vehicle.id} style={styles.vehicleCard}>
          <Text 
          style={styles.vehicleRemoveBtn}
          onPress={() => this.deleteVehicle(vehicle.id)}
          >REMOVE</Text>
          <Text style={styles.vehicleName}>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </Text>
        </View>
      );
    });

    return (
      <View>
        <View style={styles.vehiclesListContainer}>
          <ImageBackground source={background} style={styles.backgroundImage} imageStyle={{opacity: 0.2}}>
          <ScrollView style={styles.vehiclesList}>
            {vehicleCards}
          </ScrollView>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ vehicles }) => ({
  vehicles
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVehicles }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);