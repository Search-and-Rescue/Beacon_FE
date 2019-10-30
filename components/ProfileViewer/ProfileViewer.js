import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";

const ProfileViewer = props => {
  const {
    address,
    allergies,
    birthDate,
    city,
    cosarCard,
    email,
    experienceLevel,
    gender,
    hairColor,
    height,
    name,
    passwordDigest,
    phone,
    skinColor,
    state,
    weight,
    zip
  } = props.user;

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.label}>Name: {name}</Text>

      <Text style={styles.label}>Home address: {address}</Text>
      <Text style={styles.label}>City: {city}</Text>
      <Text style={styles.label}>State: {state}</Text>
      <Text style={styles.label}>Zip code: {zip}</Text>
      <Text style={styles.label}>Phone number: {phone}</Text>
      <Text style={styles.label}>Email address: {email}</Text>

      <Text style={styles.label}>Birthday: {birthDate}</Text>
      <Text style={styles.label}>Password: {passwordDigest}</Text>

      <Text style={styles.label}>Height: {weight}</Text>
      <Text style={styles.label}>Weight: {height}</Text>
      <Text style={styles.label}>Hair Color: {hairColor}</Text>
      <Text style={styles.label}>Skin Color: {skinColor}</Text>
      <Text style={styles.label}>Gender: {gender}</Text>

      <Text style={styles.label}>Allergies: {allergies}</Text>
      <Text style={styles.modalToggleText}>Outdoor Experience Level: {experienceLevel}</Text>
      <Text style={styles.modalToggleText}>COSAR Card Status: {cosarCard}</Text>
    </View>
  );
};

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(ProfileViewer);
