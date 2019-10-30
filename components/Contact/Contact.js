import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addContact, getEmergencyContacts } from '../../util/apiCalls';
import { connect } from "react-redux";
import styles from "./styles";
import { setEmergencyContacts } from '../../actions';
import { bindActionCreators } from 'redux';

export class Contact extends Component {
  constructor(props) {
    super(props);
    if (this.props.navigation.state.params === undefined) {
      this.props.navigation.state.params = { contact: {} }
    }
    const { contact } = this.props.navigation.state.params;
    this.state = {
      name: contact.name || "",
      phone: contact.phone || "",
      email: contact.email || ""
    };
  }

  handleSubmit = async () => {
    const { navigation, user, setEmergencyContacts } = this.props;
    const newContact = {
      ...this.state,
      userId: parseInt(user.id)
    }
    await addContact(newContact);
    const userInfoContacts = await getEmergencyContacts();
    await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
    navigation.navigate("ContactList");
    this.setState({
      name: "",
      phone: "",
      email: ""
    });
  };

  render() {
    return (
      <View style={styles.contactContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          placeholder="Jane D. Hiker"
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          name="name"
        />
        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          placeholder="(970)123-4567"
          style={styles.input}
          onChangeText={text => this.setState({ phone: text })}
          value={this.state.phone}
          name="phone"
        />
        <Text style={styles.label}>Email address:</Text>
        <TextInput
          placeholder="jane@email.com"
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          name="email"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => bindActionCreators({ setEmergencyContacts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);