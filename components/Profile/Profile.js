import React, { Component } from "react";
import {   
  Modal,
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      password_digest: "",
      allergies: "",
      birthdate: "",
      weight: "",
      height: "",
      hair_color: "",
      skin_color: "",
      gender: "",
      experience_level: 0,
      experience_modal: false,
      cosar_card: false,
      cosar_modal: false
    };
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("VehicleList");
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      password_digest: "",
      allergies: "",
      birthdate: "",
      weight: "",
      height: "",
      hair_color: "",
      skin_color: "",
      gender: "",
      experience_level: 0,
      experience_modal: false,
      cosar_card: false,
      cosar_modal: false
    });
  };

  setExperience = level => {
    this.setState({ experience_level: level });
    this.toggleExperienceModal();
  };

  toggleExperienceModal = () => {
    this.setState({ experience_modal: !this.state.experience_modal });
  };

  setCosar = bool => {
    this.setState({ cosar_card: bool });
    this.toggleCosarModal();
  };

  toggleCosarModal = () => {
    this.setState({ cosar_modal: !this.state.cosar_modal });
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

    const cosars = [
      {
        title: "Yes",
        value: true
      },
      {
        title: "No",
        value: false
      }
    ];

    return (
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <View style={styles.profileContainer}>
          <Modal
            animationType={"slide"}
            visible={this.state.experience_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.pickerView}>
              <Text style={styles.modalHeading}>Select Experience Level:</Text>
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
            visible={this.state.cosar_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.pickerView}>
              <Text style={styles.modalHeading}>
                Owner of current COSAR Card:
              </Text>
              {cosars.map((cosar, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    style={styles.modalButton}
                    onPress={() => this.setCosar(cosar.value)}
                  >
                    <Text>{cosar.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          </Modal>
          <ScrollView style={styles.profileFlatList}>
            <TouchableOpacity
              style={styles.modalToggleButton}
              onPress={() => this.toggleExperienceModal()}
            >
              <Text style={styles.modalToggleText}>
                Select Experience Level
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalToggleButton}
              onPress={() => this.toggleCosarModal()}
            >
              <Text style={styles.modalToggleText}>
                Select COSAR Card Status
              </Text>
            </TouchableOpacity>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              placeholder="Jill A. Hiker"
              style={styles.input}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
              name="name"
            />
            <Text style={styles.label}>Home address:</Text>
            <TextInput
              placeholder="123 Main St, Apt. 3"
              style={styles.input}
              onChangeText={text => this.setState({ address: text })}
              value={this.state.address}
              name="address"
            />
            <Text style={styles.label}>City:</Text>
            <TextInput
              placeholder="Denver"
              style={styles.input}
              onChangeText={text => this.setState({ city: text })}
              value={this.state.city}
              name="city"
            />
            <Text style={styles.label}>State:</Text>
            <TextInput
              placeholder="Colorado"
              style={styles.input}
              onChangeText={text => this.setState({ state: text })}
              value={this.state.state}
              name="state"
            />
            <Text style={styles.label}>Zip code:</Text>
            <TextInput
              keyboardType={"numeric"}
              placeholder="80202"
              style={styles.input}
              onChangeText={text => this.setState({ zip: text })}
              value={`${this.state.zip}`}
              name="zip"
            />
            <Text style={styles.label}>Phone number:</Text>
            <TextInput
              keyboardType={"phone-pad"}
              placeholder="(970) 123-4567"
              style={styles.input}
              onChangeText={text => this.setState({ phone: text })}
              value={this.state.phone}
              name="phone"
            />
            <Text style={styles.label}>Email address:</Text>
            <TextInput
              keyboardType={"email-address"}
              placeholder="jill@email.com"
              style={styles.input}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
              name="email"
            />
            <Text style={styles.label}>Birthday:</Text>
            <TextInput
              placeholder="October 1, 1985"
              style={styles.input}
              onChangeText={text => this.setState({ birthdate: text })}
              value={this.state.birthdate}
              name="birthdate"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
              placeholder="********"
              style={styles.input}
              onChangeText={text => this.setState({ password_digest: text })}
              value={this.state.password_digest}
              name="password_digest"
            />
            <Text style={styles.label}>Allergies:</Text>
            <TextInput
              placeholder="Penicillin, peanuts, latex"
              style={styles.input}
              onChangeText={text => this.setState({ allergies: text })}
              value={this.state.allergies}
              name="allergies"
            />
            <Text style={styles.label}>Height:</Text>
            <TextInput
              placeholder="5 08"
              style={styles.input}
              onChangeText={text => this.setState({ height: text })}
              value={this.state.height}
              name="height"
            />
            <Text style={styles.label}>Weight:</Text>
            <TextInput
              keyboardType={"numeric"}
              placeholder="160"
              style={styles.input}
              onChangeText={text => this.setState({ weight: Number(text) })}
              value={`${this.state.weight}`}
              name="weight"
            />
            <Text style={styles.label}>Hair Color:</Text>
            <TextInput
              placeholder="Blonde"
              style={styles.input}
              onChangeText={text => this.setState({ hair_color: text })}
              value={this.state.hair_color}
              name="hair_color"
            />
            <Text style={styles.label}>Skin Color:</Text>
            <TextInput
              placeholder="Medium"
              style={styles.input}
              onChangeText={text => this.setState({ skin_color: text })}
              value={this.state.skin_color}
              name="skin_color"
            />
            <Text style={styles.label}>Gender:</Text>
            <TextInput
              placeholder="F"
              style={styles.input}
              onChangeText={text => this.setState({ gender: text })}
              value={this.state.gender}
              name="gender"
            />
          </ScrollView>
          <TouchableOpacity
            style={styles.updateBtn}
            onPress={this.handleSubmit}
          >
            <Text style={styles.updateBtnText}>ADD PROFILE</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Profile;