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
    phone,
    skinColor,
    state,
    weight,
    zip
  } = props.user;

  const cosarStatus = cosarCard ? 'Current' : 'Not Current';

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileHeading}>About Me: </Text>
      <Text style={styles.profile}>{name}</Text>
      <Text style={styles.profile}>{address}</Text>
      <Text style={styles.profile}>{city}</Text>
      <Text style={styles.profile}>{state}, {zip}</Text>
      <Text style={styles.profile}>{phone}</Text>
      <Text style={styles.profile}>{email}</Text>
      <Text style={styles.profileHeading}>Personal Information: </Text>
      <Text style={styles.profile}>Birthday: {birthDate}</Text>
      <Text style={styles.profile}>Password: *********</Text>
      <Text style={styles.profileHeading}>Physical Description: </Text>
      <Text style={styles.profile}>Height: {weight}</Text>
      <Text style={styles.profile}>Weight: {height}</Text>
      <Text style={styles.profile}>Hair Color: {hairColor}</Text>
      <Text style={styles.profile}>Skin Color: {skinColor}</Text>
      <Text style={styles.profile}>Gender: {gender}</Text>
      <Text style={styles.profileHeading}>First Responder FYI: </Text>
      <Text style={styles.profile}>Allergies: {allergies}</Text>
      <Text style={styles.profile}>
        Outdoor Experience Level: {experienceLevel}
      </Text>
      <Text style={styles.profile}>COSAR Card Status: {cosarStatus}</Text>
    </View>
  );
};

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(ProfileViewer);
