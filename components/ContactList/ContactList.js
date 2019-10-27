import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

export class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  deleteContact = id => {
    console.log('in delete contact id: ', id)
  };

  render() {
    const contactCards = this.props.contacts.map(contact => {
      console.log('in contactList render', contact)
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

export default connect(mapStateToProps)(ContactList);
