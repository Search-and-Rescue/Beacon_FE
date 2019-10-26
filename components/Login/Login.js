import React, { Component } from 'react';
import { View, Modal, TextInput, Button } from 'react-native';
import styles from './styles';

class Login extends Component {
  
  render() {
    return (
      <Modal>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder='Email'
            style={styles.input} />
          <TextInput
            placeholder='Password'
            style={styles.input} />
          <View style={styles.loginButton}>
            <Button title='login' />
          </View>
        </View>
      </Modal>
    )
  }
}

export default Login;