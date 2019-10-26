import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

class Trip extends Component {

  render() {
    return (
      <View style={styles.tripContainer}>
        <Text>Temp Emergency Contact</Text>
        <Text>Temp Gear</Text>
        <Text>Temp Vehicle </Text>
        <TextInput 
          placeholder='Starting point'
          style={styles.input} />
        <TextInput 
          placeholder='Ending point'
          style={styles.input} />
        <TextInput 
          placeholder='Start date'
          style={styles.input} />
        <TextInput 
          placeholder='Start time'
          style={styles.input} />
        <TextInput 
          placeholder='End date'
          style={styles.input} />
        <TextInput 
          placeholder='End time'
          style={styles.input} />
        <TextInput 
          placeholder='Notification time'
          style={styles.input} />
        <TouchableOpacity>
          <View style={styles.updateBtn}>
            <Text style={styles.updateBtnText}>Add Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Trip;