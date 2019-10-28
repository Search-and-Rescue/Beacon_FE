import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { deleteContact, getEmergencyContacts } from "../../util/apiCalls";
import { connect } from "react-redux";
import styles from "./styles";
import { setEmergencyContacts } from "../../actions";
import { bindActionCreators } from "redux";

export class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  deleteContact = async id => {
    await deleteContact(id);
    const userInfoContacts = await getEmergencyContacts();
    console.log('in delete contact', userInfoContacts)
  };

  render() {
    const contactCards = this.props.contacts.map(contact => {
      return (
        <View key={contact.id} style={styles.contactCard}>
          <Text
            style={styles.contactRemoveBtn}
            onPress={() => this.deleteContact(contact.id)}
          >REMOVE</Text>
          <Text style={styles.contactsName}>{contact.name}
          </Text>
        </View>
      );
    });

    return (
      <View>
        <View style={styles.contactsListContainer}>
          <ScrollView style={styles.contactsList}>
          {contactCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ contacts }) => ({
  contacts
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setEmergencyContacts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
