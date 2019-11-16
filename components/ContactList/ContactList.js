import React, { Component } from "react";
import { ImageBackground, View, Text, ScrollView } from "react-native";
import { deleteContact, getEmergencyContacts } from "../../util/apiCalls";
import { connect } from "react-redux";
import styles from "./styles";
import { setEmergencyContacts } from "../../actions";
import { bindActionCreators } from "redux";
import background from "../../assets/background.png";

export class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  deleteContact = async id => {
    try {
      await deleteContact(id);
      const userInfoContacts = await getEmergencyContacts();
      this.props.setEmergencyContacts(userInfoContacts.user.emergencyContacts);
    } catch ({ message }) {
      console.log(message)
    }
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
          <ImageBackground
            source={background}
            style={styles.backgroundImage}
            imageStyle={{ opacity: 0.2 }}
          >
            <ScrollView style={styles.contactsList}>{contactCards}</ScrollView>
          </ImageBackground>
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
