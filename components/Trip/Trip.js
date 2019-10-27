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

import styles from "./styles";

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: 0,
      contact_modal: false,
      vehicle: 0,
      vehicle_modal: false,
      gear: [],
      gear_modal: false,
      contacts: [
        {
          name: "Mom",
          id: 1
        },
        {
          name: "Dad",
          id: 2
        },
        {
          name: "John",
          id: 3
        },
        {
          name: "Jane",
          id: 4
        }
      ],
      vehicles: [
        {
          make: "Toyota",
          model: "Tacoma 1",
          id: 1
        },
        {
          make: "Toyota",
          model: "Tacoma 2",
          id: 2
        },
        {
          make: "Toyota",
          model: "Tacoma 3",
          id: 3
        },
        {
          make: "Toyota",
          model: "Tacoma 4",
          id: 4
        }
      ],
      gearArray: [
        {
          id: 1,
          itemName: "Rustic Iron Bottle",
          description: "Chuck Norris can binary search unsorted data."
        },
        {
          id: 2,
          itemName: "Red Watch",
          description:
            "This is a long description of a watch that comes with me on all my adventures."
        }
      ]
    }
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

  render() {
    console.log("toggle", this.state.gear);
    const contactsList = this.state.contacts.map(contact => {
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

    const vehiclesList = this.state.vehicles.map(vehicle => {
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

    const gearList = this.state.gearArray.map(gear => {
      return (
        <TouchableHighlight
          key={gear.id}
          style={styles.modalButton}
          onPress={() => this.toggleGear(gear.id)}
        >
          <View
            style={styles.modalToggleGearContainer}
            >
            <Text 
              style={styles.modalToggleGearBtn}>
              {!this.state.gear.includes(gear.id) ? "ADD" : "REMOVE"}
            </Text>
            <Text
              style={styles.modalToggleGearHeading}
              >{gear.itemName}</Text>
          </View>
        </TouchableHighlight>
      );
    });

  return (
    <View style={styles.tripContainer}>
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
      <TextInput placeholder="Starting point" style={styles.input} />
      <TextInput placeholder="Ending point" style={styles.input} />
      <TextInput placeholder="Start date" style={styles.input} />
      <TextInput placeholder="Start time" style={styles.input} />
      <TextInput placeholder="End date" style={styles.input} />
      <TextInput placeholder="End time" style={styles.input} />
      <TextInput placeholder="Notification time" style={styles.input} />
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
          {gearList}
        </View>
      </Modal>
      <TouchableOpacity>
        <View style={styles.updateBtn}>
          <Text style={styles.updateBtnText}>Add Trip</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}

export default Trip;
