import React, { Component } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { addTrip, getTrips } from '../../util/apiCalls';
import { setTrips } from '../../actions';
import { bindActionCreators } from 'redux';

export class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: 0,
      contact_modal: false,
      vehicle: 0,
      vehicle_modal: false,
      gear: [],
      gear_modal: false,
      name: "",
      startingPoint: "",
      endingPoint: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      notificationDate: "",
      notificationTime: "",
      travelingCompanions:""
    };
  }

  setContact = id => {
    this.setState({ contact: id });
    this.toggleContactModal();
  };

  toggleContactModal = () => {
    this.setState({ contact_modal: !this.state.contact_modal });
  };

  setVehicle = id => {
    this.setState({ vehicle: id });
    this.toggleVehicleModal();
  };

  toggleVehicleModal = () => {
    this.setState({ vehicle_modal: !this.state.vehicle_modal });
  };

  toggleGear = id => {
    if (this.state.gear.includes(id)) {
      let remainingItems = this.state.gear.filter(item => item !== id)
      this.setState({gear: remainingItems})
    } else {
      this.setState({gear: [...this.state.gear, id]})
    }
  };

  toggleGearModal = () => {
    this.setState({ gear_modal: !this.state.gear_modal });
  };

  handleSubmit = async () => {
    const { navigation, user } = this.props;
    const newTrip = {
      name: this.state.name,
      startingPoint: this.state.startingPoint,
      endingPoint: this.state.endingPoint,
      startDate: this.state.startDate,
      startTime: this.state.startTime,
      endDate: this.state.endDate,
      endTime: this.state.endTime,
      notificationDate: this.state.notificationDate,
      notificationTime: this.state.notificationTime,
      travelingCompanions: this.state.travelingCompanions,
      userId: user.id
    }
    const trip = await addTrip(newTrip);
    const tripId = trip.data.createTrip.trip.id;
    const userInfoTrips = await getTrips();
    await this.props.setTrips(userInfoTrips.user.trips);
    navigation.navigate("TripList");
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      contact: 0,
      contact_modal: false,
      vehicle: 0,
      vehicle_modal: false,
      gear: [],
      gear_modal: false,
      name: "",
      startingPoint: "",
      endingPoint: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      notificationDate: "",
      notificationTime: "",
      travelingCompanions: ""
    });
  }

  render() {
    const contactsList = this.props.contacts.map(contact => {
      return (
        <TouchableHighlight
          key={contact.id}
          style={styles.modalButton}
          onPress={() => this.setContact(contact.id)}
        >
          <Text>{contact.name}</Text>
        </TouchableHighlight>
      );
    });

    const vehiclesList = this.props.vehicles.map(vehicle => {
        return (
          <TouchableHighlight
            key={vehicle.id}
            style={styles.modalButton}
            onPress={() => this.setVehicle(vehicle.id)}
          >
            <Text>
              {vehicle.make} {vehicle.model}
            </Text>
          </TouchableHighlight>
        );
      });

    const gearList = this.props.gear.map(gearItem => {
      return (
        <TouchableHighlight
          key={gearItem.id}
          style={styles.modalButton}
          onPress={() => this.toggleGear(gearItem.id)}
        >
          <View
            style={styles.modalToggleGearContainer}
            >
            <Text 
              style={styles.modalToggleGearBtn}>
              {!this.state.gear.includes(gearItem.id) ? "ADD" : "REMOVE"}
            </Text>
            <Text
              style={styles.modalToggleGearHeading}
              >{gearItem.itemName}</Text>
          </View>
        </TouchableHighlight>
      );
    });

  return (
    <View style={styles.tripContainer}>
      <ScrollView style={styles.tripsList}>
      <Text>State is {this.state.contact}</Text>
      <Button
        onPress={() => this.toggleContactModal()}
        title={"Add Emergency Contact"}
      ></Button>
      <Text>State is {this.state.vehicle}</Text>
      <Button
        onPress={() => this.toggleVehicleModal()}
        title={"Add Vehicle"}
      ></Button>
      <Text>State length {`${this.state.gear.length}`}</Text>
      <Button
        onPress={() => this.toggleGearModal()}
        title={"Add Gear"}
      ></Button>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={text => this.setState({ name: text })}
        value={this.state.name} />
      <TextInput 
        placeholder="Starting point" 
        style={styles.input}
        onChangeText={text => this.setState({ startingPoint: text })}
        value={this.state.startingPoint} />
      <TextInput 
        placeholder="Ending point" 
        style={styles.input}
        onChangeText={text => this.setState({ endingPoint: text })}
        value={this.state.endingPoint} />
      <TextInput 
        placeholder="Start date" 
        style={styles.input}
        onChangeText={text => this.setState({ startDate: text })}
        value={this.state.startDate} />
      <TextInput 
        placeholder="Start time" 
        style={styles.input}
        onChangeText={text => this.setState({ startTime: text })} 
        value={this.state.startTime} />
      <TextInput 
        placeholder="End date" 
        style={styles.input} 
        onChangeText={text => this.setState({ endDate: text })}
        value={this.state.endDate} />
      <TextInput 
        placeholder="End time" 
        style={styles.input} 
        onChangeText={text => this.setState({ endTime: text })} 
        value={this.state.endTime} />
      <TextInput
        placeholder="Notification date"
        style={styles.input} 
        onChangeText={text => this.setState({ notificationDate: text })}
        value={this.state.notificationDate} />
      <TextInput 
        placeholder="Notification time" 
        style={styles.input} 
        onChangeText={text => this.setState({ notificationTime: text })}
        value={this.state.notificationTime} />
      <TextInput
        placeholder="Traveling Companions"
        style={styles.input} 
        onChangeText={text => this.setState({ travelingCompanions: text })}
        value={this.state.travelingCompanions} />
      <Modal
        animationType={"slide"}
        visible={this.state.contact_modal}
        transparent={true}
        onRequestClose={() => console.log("close requested")}
      >
        <View style={styles.pickerView}>
          <Text style={styles.modalHeading}>Select Emergency Contact:</Text>
          {contactsList}
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        visible={this.state.vehicle_modal}
        transparent={true}
        onRequestClose={() => console.log("close requested")}
      >
        <View style={styles.pickerView}>
          <Text style={styles.modalHeading}>Select Vehicle:</Text>
          {vehiclesList}
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        visible={this.state.gear_modal}
        transparent={true}
        onRequestClose={() => console.log("close requested")}
        >
        <View style={styles.pickerView}>
          <Text style={styles.modalHeading}>Add Gear Items:</Text>
          <ScrollView>{gearList}</ScrollView>
          <TouchableOpacity
            onPress={() => this.toggleGearModal()}
          >
            <Text style={styles.updateBtn}>Submit Gear List</Text>
          </TouchableOpacity>
        </View>
      </Modal>
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}
      >
        <Text style={styles.updateBtnText}>Add Trip</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
  }
}

export const mapStateToProps = ({ contacts, vehicles, gear, user }) => ({
  contacts,
  vehicles,
  gear,
  user
});

export const mapDispatchToProps = dispatch => bindActionCreators({ setTrips }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
