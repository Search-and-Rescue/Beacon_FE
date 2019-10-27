import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

class Vehicle extends Component {
  constructor(props) {
    super(props);
    if (this.props.navigation.state.params === undefined) {
      this.props.navigation.state.params = {vehicle: {}}
    }
    const { vehicle } = this.props.navigation.state.params;
    this.state = {
      make: vehicle.make || "",
      model: vehicle.model || "",
      year: vehicle.year || "",
      color: vehicle.color || "",
      licensePlate: vehicle.licensePlate || "",
      state: vehicle.state || ""
    };
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("VehicleList");
    this.setState({
      make: "",
      model: "",
      year: "",
      color: "",
      licensePlate: "",
      state: ""
    });
  }

  render() {
    return (
      <View style={styles.vehicleContainer}>
        <Text>Make</Text>
        <TextInput
          placeholder="make"
          style={styles.input}
          onChangeText={text => this.setState({ make: text })}
          value={this.state.make}
          name="make"
        />
        <Text>Model</Text>
        <TextInput
          placeholder="model"
          style={styles.input}
          onChangeText={text => this.setState({ model: text })}
          value={this.state.model}
          name="model"
        />
        <Text>Year</Text>
        <TextInput
          placeholder="year"
          style={styles.input}
          onChangeText={text => this.setState({ year: text })}
          value={String(this.state.year)}
          name="year"
        />
        <Text>Color</Text>
        <TextInput
          placeholder="color"
          style={styles.input}
          onChangeText={text => this.setState({ color: text })}
          value={this.state.color}
          name="color"
        />
        <Text>License Plate</Text>
        <TextInput
          placeholder="license plate"
          style={styles.input}
          onChangeText={text => this.setState({ licensePlate: text })}
          value={this.state.licensePlate}
          name="license_plate"
        />
        <Text>License State</Text>
        <TextInput
          placeholder="license state"
          style={styles.input}
          onChangeText={text => this.setState({ state: text })}
          value={this.state.state}
          name="state"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Vehicle;
