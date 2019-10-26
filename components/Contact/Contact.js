import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    const { contact } = this.props.navigation.state.params;
    this.state = {
      name: contact.name || "",
      phone: contact.phone || "",
      email: contact.email || ""
    };
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("ContactList");
    this.setState({
      make: "",
      model: "",
      year: "",
      color: "",
      license_plate: ""
    });
  };

  render() {
    return (
      <View style={styles.contactContainer}>
        <Text>Name</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          name="name"
        />
        <Text>Phone number</Text>
        <TextInput
          placeholder="phone"
          style={styles.input}
          onChangeText={text => this.setState({ phone: text })}
          value={this.state.phone}
          name="phone"
        />
        <Text>Email address</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          name="email"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
