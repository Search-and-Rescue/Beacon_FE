import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

export class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  deleteVehicle = (id) => {
    console.log('in delete vehicle id: ', id)
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
          <ScrollView style={styles.vehiclesList}>
            {vehicleCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ vehicles }) => ({
  vehicles
});

export default connect(mapStateToProps)(VehicleList);