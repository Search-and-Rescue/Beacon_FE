import React from 'react';
import { View, Modal, TextInput, Button } from 'react-native';

const Login = () => {
  return (
    <Modal>
      <View>
        <TextInput />
        <TextInput />
        <View>
          <Button title='login'/>
        </View>
      </View>
    </Modal>
  )
}

export default Login;