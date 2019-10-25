import React, { Component } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
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
      experience_level: 0,
      birthdate: "",
      weight: 0,
      height: "",
      hair_color: "",
      skin_color: "",
      gender: "",
      COSAR_card: false
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
      experience_level: 0,
      weight: 0,
      height: "",
      hair_color: "",
      skin_color: "",
      gender: "",
      COSAR_card: false,
      birthdate: ""
    })
  }

  setDate = (newDate) => {
    this.setState({ birthdate: newDate });
  }

  render() {
    return (
      <View style={styles.profileContainer}>
        <Text>Profile Page</Text>
        <ScrollView style={styles.profileFlatList}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
          name="name" />
        <TextInput
          placeholder="Home address"
          style={styles.input}
          onChangeText={(text) => this.setState({ address: text })}
          value={this.state.address}
          name="address" />
        <TextInput
          placeholder="City"
          style={styles.input}
          onChangeText={(text) => this.setState({ city: text })}
          value={this.state.city}
          name="city" />
        <TextInput
          placeholder="State"
          style={styles.input}
          onChangeText={(text) => this.setState({ state: text })}
          value={this.state.state}
          name="state" />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Zip code"
          style={styles.input}
          onChangeText={(text) => this.setState({ zip: text })}
          value={`${this.state.zip}`}
          name="zip" />
        <TextInput
          keyboardType={'phone-pad'}
          placeholder= "Phone number"
          style={styles.input}
          onChangeText={(text) => this.setState({ phone: text })}
          value={this.state.phone}
          name= "phone" />
        <TextInput
          keyboardType={'email-address'}
          placeholder="Email address"
          style={styles.input}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
          name="email" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => this.setState({ password_digest : text })}
          value={this.state.password_digest}
          name="password_digest" />
        <TextInput
          placeholder="Allergies"
          style={styles.input}
          onChangeText={(text) => this.setState({ allergies: text })}
          value={this.state.allergies}
          name="allergies" />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Experience level: 1, 2, or 3"
          style={styles.input}
          onChangeText={(text) => this.setState({ experience_level: Number(text) })}
          value={`${this.state.experience_level}`}
          name="experience_level" />
          <TextInput
          placeholder="Birthdate"
          style={styles.input}
          onChangeText={(text) => this.setState({ birthdate: text })}
          value={this.state.birthdate}
          name="birthdate" />
          <TextInput
          keyboardType={'numeric'}
          placeholder="Weight"
          style={styles.input}
          onChangeText={(text) => this.setState({ weight: Number(text) })}
          value={`${this.state.weight}`}
          name="weight" />
          <TextInput
          placeholder="Height"
          style={styles.input}
          onChangeText={(text) => this.setState({ height: text })}
          value={this.state.height}
          name="height" />
          <TextInput
          placeholder="Hair color"
          style={styles.input}
          onChangeText={(text) => this.setState({ hair_color: text })}
          value={this.state.hair_color}
          name="hair_color" />
          <TextInput
          placeholder="Skin color"
          style={styles.input}
          onChangeText={(text) => this.setState({ skin_color: text })}
          value={this.state.skin_color}
          name="skin_color" />
          <TextInput
          placeholder="Gender"
          style={styles.input}
          onChangeText={(text) => this.setState({ gender: text })}
          value={this.state.gender}
          name="gender" />
          <TextInput
          placeholder="COSAR card"
          style={styles.input}
          onChangeText={(text) => this.setState({ COSAR_card: Boolean(text) })}
          value={`${this.state.COSAR_card}`}
          name="COSAR_card" />
        </ScrollView>
        <TouchableOpacity style={styles.updateBtn}
          onPress={this.handleSubmit} >
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Profile;