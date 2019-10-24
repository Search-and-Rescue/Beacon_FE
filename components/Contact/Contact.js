import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemBtn}>
          <Text>Contact Page</Text>
          <TextInput 
            placeholder="name"
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })} 
            value={this.state.name}
            name="name" />
          <TextInput 
            placeholder="phone"
            style={styles.input}
            onChangeText={(text) => this.setState({ phone: text })}
            value={this.state.phone}
            name="phone" />
          <TextInput 
            placeholder="email"
            style={styles.input}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            name="email" />
          <TouchableOpacity style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("ContactList")} >
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
