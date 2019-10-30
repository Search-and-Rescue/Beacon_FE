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
import { addTrip, getTrips, addGearForTrip, addContactsForTrip, addVehiclesForTrip } from '../../util/apiCalls';
import { setTrips, setCurrentTrip } from '../../actions';
import { bindActionCreators } from 'redux';

export class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contacts_modal: false,
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

  toggleContacts = id => {
    if(this.state.contacts.includes(id)) {
      let remainingContacts = this.state.contacts.filter(item => item !== id)
      this.setState({ contacts: remainingContacts })
    } else {
      this.setState({ contacts: [...this.state.contacts, id] })
    }
  };

  toggleContactsModal = () => {
    this.setState({ contacts_modal: !this.state.contacts_modal });
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
    const { navigation, user, setCurrentTrip, setTrips } = this.props;
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
    this.props.setCurrentTrip(tripId);
    const userInfoTrips = await getTrips();
    await setTrips(userInfoTrips.user.trips);
    this.saveTripGear(tripId);
    this.saveTripContact(tripId);
    this.saveTripVehicle(tripId);
    navigation.navigate("TripList");
    this.clearInputs();
  }

  saveTripGear = (tripId) => {
    let promises = this.state.gear.map(gearId => {
      let newGear = {
        tripId,
        gearId,
        comment: ""
      };
      addGearForTrip(newGear);
    })
    return Promise.all(promises);
  }

  saveTripContact = (tripId) => {
    let promises = this.state.contacts.map(emergencyContactId => {
      let newContact = {
        tripId,
        emergencyContactId
      };
      addContactsForTrip(newContact);
    })
    return Promise.all(promises);
  }

  saveTripVehicle = async (tripId) => {
    let newVehicle = {
      tripId,
      vehicleId: this.state.vehicle
    };
    await addVehiclesForTrip(newVehicle);
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
    const disableBtn = this.props.currentTrip ? true : false;
    const disableBtnColor = this.props.currentTrip ? styles.disableColor : styles.updateBtn;
    const contactsList = this.props.contacts.map(contact => {
      return (
        <TouchableHighlight
          key={contact.id}
          style={styles.modalButton}
          onPress={() => this.toggleContacts(contact.id)}
        >
          <View
            style={styles.modalToggleContactsContainer}
          >
            <Text
              style={styles.modalToggleContactsBtn}>
              {!this.state.contacts.includes(contact.id) ? "ADD" : "REMOVE"}
            </Text>
            <Text
              style={styles.modalToggleContactsHeading}
            >{contact.name}</Text>
          </View>
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
        <TouchableOpacity
          style={styles.modalToggleButton}
          onPress={() => this.toggleContactsModal()}
        >
          <Text style={styles.modalToggleText}>Select Emergency Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalToggleButton}
          onPress={() => this.toggleVehicleModal()}
        >
          <Text style={styles.modalToggleText}>Select Vehicle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalToggleButton}
          onPress={() => this.toggleGearModal()}
        >
          <Text style={styles.modalToggleText}>Select Gear Items</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Trip Name: </Text>
        <TextInput
          placeholder="Mt Massive w/soccer club"
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <Text style={styles.label}>Starting Point:</Text>
        <TextInput
          placeholder="Leadville Fish Hatchery"
          style={styles.input}
          onChangeText={text => this.setState({ startingPoint: text })}
          value={this.state.startingPoint}
        />
        <Text style={styles.label}>Ending Point:</Text>
        <TextInput
          placeholder="Leadville Fish Hatchery"
          style={styles.input}
          onChangeText={text => this.setState({ endingPoint: text })}
          value={this.state.endingPoint}
        />
        <Text style={styles.label}>Starting date:</Text>
        <TextInput
          placeholder="November 20, 2019"
          style={styles.input}
          onChangeText={text => this.setState({ startDate: text })}
          value={this.state.startDate}
        />
        <Text style={styles.label}>Start time:</Text>
        <TextInput
          placeholder="07:00"
          style={styles.input}
          onChangeText={text => this.setState({ startTime: text })}
          value={this.state.startTime}
        />
        <Text style={styles.label}>End date:</Text>
        <TextInput
          placeholder="November 20, 2019"
          style={styles.input}
          onChangeText={text => this.setState({ endDate: text })}
          value={this.state.endDate}
        />
        <Text style={styles.label}>End time:</Text>
        <TextInput
          placeholder="11:30"
          style={styles.input}
          onChangeText={text => this.setState({ endTime: text })}
          value={this.state.endTime}
        />
        <Text style={styles.label}>Notification date:</Text>
        <TextInput
          placeholder="November 20, 2019"
          style={styles.input}
          onChangeText={text => this.setState({ notificationDate: text })}
          value={this.state.notificationDate}
        />
        <Text style={styles.label}>Notification time:</Text>
        <TextInput
          placeholder="14:00"
          style={styles.input}
          onChangeText={text => this.setState({ notificationTime: text })}
          value={this.state.notificationTime}
        />
        <Text style={styles.label}>Number of Companions:</Text>
        <TextInput
          placeholder="3"
          style={styles.input}
          onChangeText={text => this.setState({ travelingCompanions: text })}
          value={this.state.travelingCompanions}
        />
        <Modal
          animationType={"slide"}
          visible={this.state.contacts_modal}
          transparent={true}
          onRequestClose={() => console.log("close requested")}
        >
          <View style={styles.pickerView}>
            <Text style={styles.modalHeading}>Add Contacts Items:</Text>
            <ScrollView>{contactsList}</ScrollView>
            <TouchableOpacity onPress={() => this.toggleContactsModal()}>
              <Text style={styles.updateBtn}>Submit Contacts List</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => this.toggleGearModal()}>
              <Text style={styles.updateBtn}>Submit Gear List</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          style={disableBtnColor}
          onPress={this.handleSubmit}
          disabled={disableBtn}
        >
          <Text style={styles.updateBtnText}>Add Trip</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
  }
}

export const mapStateToProps = ({ contacts, vehicles, gear, user, currentTrip }) => ({
  contacts,
  vehicles,
  gear,
  user,
  currentTrip
});

export const mapDispatchToProps = dispatch => bindActionCreators({ setTrips, setCurrentTrip }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
