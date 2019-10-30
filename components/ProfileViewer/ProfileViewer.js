import React, { Component } from "react";
import {
  Modal,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const ProfileViewer = () => {

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.modalToggleText}>Select Experience Level</Text>
      <Text style={styles.modalToggleText}>Select COSAR Card Status</Text>
      <Text style={styles.modalHeading}>Select Experience Level:</Text>
      <Text style={styles.modalHeading}>COSAR Card status: </Text>
      <Text style={styles.label}>Home address:</Text>
      <Text style={styles.label}>City:</Text>
      <Text style={styles.label}>State:</Text>
      <Text style={styles.label}>Zip code:</Text>
      <Text style={styles.label}>Phone number:</Text>
      <Text style={styles.label}>Email address:</Text>
      <Text style={styles.label}>Birthday:</Text>
      <Text style={styles.label}>Password:</Text>
      <Text style={styles.label}>Allergies:</Text>
      <Text style={styles.label}>Height:</Text>
      <Text style={styles.label}>Weight:</Text>
      <Text style={styles.label}>Hair Color:</Text>
      <Text style={styles.label}>Skin Color:</Text>
      <Text style={styles.label}>Gender:</Text>
    </View>
  );
};

export default ProfileViewer;