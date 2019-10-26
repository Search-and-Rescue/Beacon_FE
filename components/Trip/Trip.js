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
      emergency_contact: "",
      contact_modal: false,
      vehicle: "",
      vehicle_modal: false
    }
  }

  setExperience = (level) => {
    this.setState({experience_level: level});
    this.toggleExperienceModal();
  } 

  toggleExperienceModal = () => {
    this.setState({experience_modal: !this.state.experience_modal});
  }

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

    return (
      <View style={styles.tripContainer}>
        <Text>State is {this.state.experience_level}</Text>
        <Button 
          onPress={() => this.toggleExperienceModal()}
          title={"Choose Experience Level"}
        ></Button>
        <Modal
          animationType={'slide'}
          visible={this.state.experience_modal}
          transparent={true}
          onRequestClose={() => console.log("close requested")}
        >
          <View style={styles.pickerView}>
            <Text style={styles.experienceHeading}>Select Experience Level:</Text>
            {experienceLevels.map((level, index) => {
                return <TouchableHighlight
                  key={index}
                  style={styles.experienceButton}
                  onPress={() => this.setExperience(level.value)}
                  >
                  <Text>{level.title}</Text>
                  </TouchableHighlight>
            })}
          </View>
        </Modal>
        <Text>Temp Emergency Contact</Text>
        <Text>Temp Gear</Text>
        <Text>Temp Vehicle </Text>
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