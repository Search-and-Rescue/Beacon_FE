import React, { Component } from 'react';
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

import styles from './styles';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience_level: 0,
      experience_modal: false,
      contact: "",
      contact_modal: false,
      vehicle: "",
      vehicle_modal: false
    };
  }

  setExperience = level => {
    this.setState({ experience_level: level });
    this.toggleExperienceModal();
  };

  toggleExperienceModal = () => {
    this.setState({ experience_modal: !this.state.experience_modal });
  };

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

  render() {
    const experienceLevels = [
      {
        title: "Beginner",
        value: 1
      },
      {
        title: "Intermediate",
        value: 2
      },
      {
        title: "Advanced",
        value: 3
      }
    ];

    const contacts = [
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
    ];

    const vehicles = [
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
    ];

    return (
      <View style={styles.tripContainer}>
        <Text>State is {this.state.experience_level}</Text>
        <Button
          onPress={() => this.toggleExperienceModal()}
          title={"Choose Experience Level: "}
        ></Button>
        <Text>State is {this.state.contact}</Text>
        <Button
          onPress={() => this.toggleContactModal()}
          title={"Choose Emergency Contact: "}
        ></Button>
        <Text>State is {this.state.vehicle}</Text>
        <Button
          onPress={() => this.toggleVehicleModal()}
          title={"Choose Vehicle: "}
        ></Button>
        <Modal
          animationType={"slide"}
          visible={this.state.experience_modal}
          transparent={true}
          onRequestClose={() => console.log("close requested")}
        >
          <View style={styles.pickerView}>
            <Text style={styles.modalHeading}>
              Select Experience Level:
            </Text>
            {experienceLevels.map((level, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  style={styles.modalButton}
                  onPress={() => this.setExperience(level.value)}
                >
                  <Text>{level.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
        <Modal
          animationType={"slide"}
          visible={this.state.contact_modal}
          transparent={true}
          onRequestClose={() => console.log("close requested")}
        >
          <View style={styles.pickerView}>
            <Text style={styles.modalHeading}>
              Select Emergency Contact:
            </Text>
            {contacts.map((contact, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  style={styles.modalButton}
                  onPress={() => this.setContact(contact.id)}
                >
                  <Text>{contact.name}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
        <TextInput placeholder="Starting point" style={styles.input} />
        <TextInput placeholder="Ending point" style={styles.input} />
        <TextInput placeholder="Start date" style={styles.input} />
        <TextInput placeholder="Start time" style={styles.input} />
        <TextInput placeholder="End date" style={styles.input} />
        <TextInput placeholder="End time" style={styles.input} />
        <TextInput placeholder="Notification time" style={styles.input} />
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