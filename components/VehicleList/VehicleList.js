import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import styles from "./styles";

export class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemLinks = this.props.vehicles.map(vehicle => {
      return (
        <TouchableOpacity
          key={vehicle.id}
          style={styles.vehiclesLink}
        >
          <Text style={styles.vehiclesName}>{vehicle.make}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <View>
        <View style={styles.vehiclesListContainer}>
          <ScrollView style={styles.vehiclesList}>
            {itemLinks}
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
