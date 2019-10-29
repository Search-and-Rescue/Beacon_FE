import React, { Component } from "react";
import { Button, 
  Modal,
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  TouchableOpacity} from "react-native";
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
      <View style={styles.profileContainer}>
        <Button
          onPress={() => this.toggleExperienceModal()}
          title={"Choose Experience Level"}
        ></Button>
        <Button
          onPress={() => this.toggleCosarModal()}
          title={"Add COSAR Card Status"}
        ></Button>
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
            placeholder="me@email.com"
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            name="email"
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput
            placeholder="********"
            style={styles.input}
            onChangeText={text => this.setState({ password_digest: text })}
            value={this.state.password_digest}
            name="password_digest"
          />
          <Text style={styles.label}>My allergies:</Text>
          <TextInput
            placeholder="Penicillin, peanuts, latex"
            style={styles.input}
            onChangeText={text => this.setState({ allergies: text })}
            value={this.state.allergies}
            name="allergies"
          />
          <Text style={styles.label}>My outdoor experience:</Text>
          <TextInput
            keyboardType={"numeric"}
            placeholder="Beginner, Intermediate, Advanced"
            style={styles.input}
            onChangeText={text =>
              this.setState({ experience_level: Number(text) })
            }
            value={`${this.state.experience_level}`}
            name="experience_level"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="Birthdate"
            style={styles.input}
            onChangeText={text => this.setState({ birthdate: text })}
            value={this.state.birthdate}
            name="birthdate"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            keyboardType={"numeric"}
            placeholder="Weight"
            style={styles.input}
            onChangeText={text => this.setState({ weight: Number(text) })}
            value={`${this.state.weight}`}
            name="weight"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="Height"
            style={styles.input}
            onChangeText={text => this.setState({ height: text })}
            value={this.state.height}
            name="height"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="Hair color"
            style={styles.input}
            onChangeText={text => this.setState({ hair_color: text })}
            value={this.state.hair_color}
            name="hair_color"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="Skin color"
            style={styles.input}
            onChangeText={text => this.setState({ skin_color: text })}
            value={this.state.skin_color}
            name="skin_color"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="Gender"
            style={styles.input}
            onChangeText={text => this.setState({ gender: text })}
            value={this.state.gender}
            name="gender"
          />
          <Text style={styles.label}>:</Text>
          <TextInput
            placeholder="COSAR card"
            style={styles.input}
            onChangeText={text => this.setState({ COSAR_card: Boolean(text) })}
            value={`${this.state.COSAR_card}`}
            name="COSAR_card"
          />
          <Text style={styles.label}>:</Text>
        </ScrollView>
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;