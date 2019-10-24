import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

class Vehicle extends Component {
  constructor() {
    super();
    this.state = {
      make: "",
      model: "",
      year: "",
      color: "",
      license_plate: ""
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
      license_plate: ""
    });
  }

  render() {
    return (
      <View style={styles.vehicleContainer}>
        <Text>Vehicle Page</Text>
        <TextInput 
          placeholder="make"
          style={styles.input}
          onChangeText={(text) => this.setState({ make: text })}
          value={this.state.make}
          name="make" />
        <TextInput
          placeholder="model"
          style={styles.input}
          onChangeText={(text) => this.setState({ model: text })}
          value={this.state.model}
          name="model" />
        <TextInput
          placeholder="year"
          style={styles.input}
          onChangeText={(text) => this.setState({ year: text })}
          value={this.state.year}
          name="year" />
        <TextInput 
          placeholder="color"
          style={styles.input}
          onChangeText={(text) => this.setState({ color: text })}
          value={this.state.color}
          name="color" />
        <TextInput
          placeholder="license plate"
          style={styles.input}
          onChangeText={(text) => this.setState({ license_plate: text })}
          value={this.state.license_plate}
          name="license_plate" />
        <TouchableOpacity style={styles.updateBtn}
          onPress={this.handleSubmit} >
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Vehicle;
