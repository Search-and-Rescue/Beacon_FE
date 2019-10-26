import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import styles from "./styles";

export class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemLinks = this.props.contacts.map(contact => {
      return (
        <TouchableOpacity
          key={contact.name}
          style={styles.contactsLink}
        >
          <Text style={styles.contactsName}>{contact.name}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <View>
        <View style={styles.contactsListContainer}>
          <ScrollView style={styles.contactsList}>
            {itemLinks}
          </ScrollView>
          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={() => this.props.navigation.navigate("Contact")}
          >
            <Text style={styles.addBtnText}>Add an Emergency Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ contacts }) => ({
  contacts
});

export default connect(mapStateToProps)(ContactList);
