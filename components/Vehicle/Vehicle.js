import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addVehicle, getVehicles } from '../../util/apiCalls';
import { connect } from "react-redux";
import styles from "./styles";
import { setVehicles } from '../../actions';
import { bindActionCreators } from 'redux';

export class Vehicle extends Component {
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

  handleSubmit = async () => {
    const { navigation, user } = this.props;
    const newVehicle = {
      ...this.state,
      userId: parseInt(user.id)
    }
    await addVehicle(newVehicle);
    const userInfoVehicles = await getVehicles();
    await this.props.setVehicles(userInfoVehicles.user.vehicles);
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
        <Text style={styles.label}>Make:</Text>
        <TextInput
          placeholder="Toyota"
          style={styles.input}
          onChangeText={text => this.setState({ make: text })}
          value={this.state.make}
          name="make"
        />
        <Text style={styles.label}>Model:</Text>
        <TextInput
          placeholder="Tacoma"
          style={styles.input}
          onChangeText={text => this.setState({ model: text })}
          value={this.state.model}
          name="model"
        />
        <Text style={styles.label}>Year:</Text>
        <TextInput
          keyboardType={"numeric"}
          placeholder="2010"
          style={styles.input}
          onChangeText={text => this.setState({ year: text })}
          value={String(this.state.year)}
          name="year"
        />
        <Text style={styles.label}>Color:</Text>
        <TextInput
          placeholder="Silver"
          style={styles.input}
          onChangeText={text => this.setState({ color: text })}
          value={this.state.color}
          name="color"
        />
        <Text style={styles.label}>License Plate:</Text>
        <TextInput
          placeholder="123ABC"
          style={styles.input}
          onChangeText={text => this.setState({ licensePlate: text })}
          value={this.state.licensePlate}
          name="license_plate"
        />
        <Text style={styles.label}>License State:</Text>
        <TextInput
          placeholder="CO"
          style={styles.input}
          onChangeText={text => this.setState({ state: text })}
          value={this.state.state}
          name="state"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => bindActionCreators({ setVehicles }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
