import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  DatePickerIOS
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
      vehicle: {},
      vehicle_modal: false,
      gear: [],
      gear_modal: false,
      name: "",
      startingPoint: "",
      endingPoint: "",
      startDate: new Date(),
      startDate_modal: false,
      startTime: new Date(),
      startTime_modal: false,
      endDate: new Date(),
      endDate_modal: false,
      endTime: new Date(),
      endTime_modal: false,
      notificationDate: new Date(),
      notificationDate_modal: false,
      notificationTime: new Date(),
      notificationTime_modal: false,
      travelingCompanions:""
    };
  }

  toggleContacts = contact => {
    if(this.state.contacts.includes(contact)) {
      let remainingContacts = this.state.contacts.filter(item => item.id !== contact.id)
      this.setState({ contacts: remainingContacts })
    } else {
      this.setState({ contacts: [...this.state.contacts, contact] })
    }
  };

  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName]})
  }

  formatDate = (date) => {
    const splitDate = date.toString().split(' ');
    const updateDate = `${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`
    return updateDate;
  }

  formatTime = (time) => {
    const splitTime = time.toString().split(' ')
    const updateTime = `${splitTime[4]}`;
    const removeMilli = updateTime.split(':');
    const finalTime = `${removeMilli[0]}:${removeMilli[1]}`;
    return finalTime;
  }

  setVehicle = vehicle => {
    this.setState({ vehicle });
    this.toggleModal("vehicle_modal");
  };

  toggleGear = gearItem => {
    if (this.state.gear.includes(gearItem)) {
      let remainingItems = this.state.gear.filter(item => item.id !== gearItem.id)
      this.setState({gear: remainingItems})
    } else {
      this.setState({gear: [...this.state.gear, gearItem]})
    }
  };

  handleSubmit = async () => {
    const { navigation, user, setCurrentTrip, setTrips } = this.props;
    const newTrip = {
      name: this.state.name,
      startingPoint: this.state.startingPoint,
      endingPoint: this.state.endingPoint,
      startDate: this.formatDate(this.state.startDate),
      startTime: this.formatTime(this.state.startTime),
      endDate: this.formatDate(this.state.endDate),
      endTime: this.formatTime(this.state.endTime),
      notificationDate: this.formatDate(this.state.notificationDate),
      notificationTime: this.formatTime(this.state.notificationTime),
      travelingCompanions: this.state.travelingCompanions,
      userId: user.id
    }
    const trip = await addTrip(newTrip);
    const tripId = trip.data.createTrip.trip.id;
    this.props.setCurrentTrip(tripId, this.state.name);
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
      contacts: [],
      vehicle: {},
      gear: [],
      name: "",
      startingPoint: "",
      endingPoint: "",
      startDate: new Date(),
      startTime: new Date(),
      endDate: new Date(),
      endTime: new Date(),
      notificationDate: new Date(),
      notificationTime: new Date(),
      travelingCompanions: ""
    });
  }

  render() {
    const displayContacts = this.state.contacts.map(contact => {
      return <Text style={styles.displayList} key={contact.id}>&#8226; {contact.name}</Text>
    })
    const displayVehicle = <Text style={styles.displayList}>&#8226; {this.state.vehicle.make} {this.state.vehicle.model}</Text>
    const displayGear = this.state.gear.map(gearItem => {
      return <Text style={styles.displayList} key={gearItem.id}>&#8226; {gearItem.itemName}</Text>
    })
    const disableBtn = this.props.currentTrip.id ? true : false;
    const disableBtnColor = this.props.currentTrip.id ? styles.disableColor : styles.updateBtn;
    const contactsList = this.props.contacts.map(contact => {
      return (
        <TouchableHighlight
          key={contact.id}
          style={styles.modalButton}
          onPress={() => this.toggleContacts(contact)}
        >
          <View style={styles.modalToggleContactsContainer}>
            <Text style={styles.modalToggleBtnText}>
              {!this.state.contacts.includes(contact) ? "ADD" : "REMOVE"}
            </Text>
            <Text style={styles.modalOptionsText}
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
            onPress={() => this.setVehicle(vehicle)}
          >
            <Text style={styles.modalOptionsText}>
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
          onPress={() => this.toggleGear(gearItem)}
        >
          <View
            style={styles.modalToggleGearContainer}
            >
            <Text 
              style={styles.modalToggleBtnText}>
              {!this.state.gear.includes(gearItem) ? "ADD" : "REMOVE"}
            </Text>
            <Text
              style={styles.modalOptionsText}
              >{gearItem.itemName}</Text>
          </View>
        </TouchableHighlight>
      );
    });

  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <View style={styles.tripContainer}>
        <ScrollView style={styles.tripsList}>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalToggleButton}
              onPress={() => this.toggleModal("contacts_modal")}
            >
              <Text style={styles.modalToggleText}>
                Select Emergency Contacts
              </Text>
            </TouchableOpacity>
            {this.state.contacts && displayContacts}
            <TouchableOpacity
              style={styles.modalToggleButton}
              onPress={() => this.toggleModal("vehicle_modal")}
            >
              <Text style={styles.modalToggleText}>Select Vehicle</Text>
            </TouchableOpacity>
            {this.state.vehicle.make && displayVehicle}
            <TouchableOpacity
              style={styles.modalToggleButton}
              onPress={() => this.toggleModal("gear_modal")}
            >
              <Text style={styles.modalToggleText}>Select Gear Items</Text>
            </TouchableOpacity>
            {this.state.gear && displayGear}
          </View>
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
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("startDate_modal")}
          >
            <Text style={styles.modalToggleText}>Select Start Date</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatDate(this.state.startDate)}</Text>
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("startTime_modal")}
          >
            <Text style={styles.modalToggleText}>Select Start Time</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatTime(this.state.startTime)}</Text>
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("endDate_modal")}
          >
            <Text style={styles.modalToggleText}>Select End Date</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatDate(this.state.endDate)}</Text>
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("endTime_modal")}
          >
            <Text style={styles.modalToggleText}>Select End Time</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatTime(this.state.endTime)}</Text>
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("notificationDate_modal")}
          >
            <Text style={styles.modalToggleText}>Select Notification Date</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatDate(this.state.notificationDate)}</Text>
          <TouchableOpacity
            style={styles.modalToggleButton}
            onPress={() => this.toggleModal("notificationTime_modal")}
          >
            <Text style={styles.modalToggleText}>Select Notification Time</Text>
          </TouchableOpacity>
          <Text style={styles.dateTime}>{this.formatTime(this.state.notificationTime)}</Text>
          <Text style={styles.label}>Number of Companions:</Text>
          <TextInput
            keyboardType={"numeric"}
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
            <View style={styles.modalView}>
              <Text style={styles.modalHeading}>Select Contacts:</Text>
              <ScrollView>{contactsList}</ScrollView>
              <TouchableOpacity onPress={() => this.toggleModal("contacts_modal")}>
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
            <View style={styles.modalView}>
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
            <View style={styles.modalView}>
              <Text style={styles.modalHeading}>Select Gear Items:</Text>
              <ScrollView>{gearList}</ScrollView>
              <TouchableOpacity onPress={() => this.toggleModal("gear_modal")}>
                <Text style={styles.updateBtn}>Submit Gear List</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.startDate_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select Start Date:</Text>
              <DatePickerIOS
                mode="date"
                date={this.state.startDate}
                onDateChange={(date) => this.setState({ startDate: date })}
                />
              <TouchableOpacity onPress={() => this.toggleModal("startDate_modal")}>
                <Text style={styles.updateBtn}>Submit Start Date</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.endDate_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select End Date:</Text>
              <DatePickerIOS
                mode="date"
                date={this.state.endDate}
                onDateChange={(date) => this.setState({ endDate: date })}
                />
              <TouchableOpacity onPress={() => this.toggleModal("endDate_modal")}>
                <Text style={styles.updateBtn}>Submit End Date</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.notificationDate_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select Notification Date:</Text>
              <DatePickerIOS
                mode="date"
                date={this.state.notificationDate}
                onDateChange={(date) => this.setState({ notificationDate: date })}
                />
              <TouchableOpacity onPress={() => this.toggleModal("notificationDate_modal")}>
                <Text style={styles.updateBtn}>Submit Notification Date</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.startTime_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select Start Time:</Text>
              <DatePickerIOS
                mode="time"
                date={this.state.startTime}
                onDateChange={(time) => this.setState({ startTime: time })}
              />
              <TouchableOpacity onPress={() => this.toggleModal("startTime_modal")}>
                <Text style={styles.updateBtn}>Submit Start Time</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.endTime_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select End Time:</Text>
              <DatePickerIOS
                mode="time"
                date={this.state.endTime}
                onDateChange={(time) => {
                  this.setState({ endTime: time })
                }}
              />
              <TouchableOpacity onPress={() => this.toggleModal("endTime_modal")}>
                <Text style={styles.updateBtn}>Submit End Time</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType={"slide"}
            visible={this.state.notificationTime_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.modalTimeDateView}>
              <Text style={styles.modalHeading}>Select Notification Time:</Text>
              <DatePickerIOS
                mode="time"
                date={this.state.notificationTime}
                onDateChange={(time) => {
                  this.setState({ notificationTime: time })
                }}
              />
              <TouchableOpacity onPress={() => this.toggleModal("notificationTime_modal")}>
                <Text style={styles.updateBtn}>Submit Notification Time</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View style={{ flex: 1 }} />
        </ScrollView>
        <TouchableOpacity
          style={disableBtnColor}
          onPress={this.handleSubmit}
          disabled={disableBtn}
        >
          <Text style={styles.updateBtnText}>ADD TRIP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
