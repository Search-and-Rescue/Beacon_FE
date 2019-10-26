import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styles from "./styles";

export class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  editVehicle = vehicle => {
    this.props.navigation.navigate("Vehicle", { vehicle });
  };

  render() {
    const vehicleLinks = this.props.vehicles.map(vehicle => {
      return (
        <TouchableOpacity 
          key={vehicle.id} 
          style={styles.vehiclesLink}
          onPress={() => this.editVehicle(vehicle)}
          >
          <Text style={styles.vehiclesName}>{vehicle.year} {vehicle.make} {vehicle.model}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View>
        <View style={styles.vehiclesListContainer}>
          <ScrollView style={styles.vehiclesList}>
            {vehicleLinks}
          </ScrollView>
          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("Vehicle")}
          >
            <Text style={styles.addBtnText}>Add a vehicle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ vehicles }) => ({
  vehicles
});

export default connect(mapStateToProps)(VehicleList);
