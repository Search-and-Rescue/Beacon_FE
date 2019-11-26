import React, { Component } from "react";
import { View, Modal, TextInput, Button } from "react-native";
import styles from "./styles";

class SignUp extends Component {
  render() {
    return (
      <Modal>
        <View style={styles.signupContainer}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <View style={styles.signupButton}>
            <Button title="signup" />
          </View>
        </View>
      </Modal>
    );
  }
}

export default SignUp;
