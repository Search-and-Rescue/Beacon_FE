import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import MenuButton from "../../navigation/MenuButton/MenuButton";

const Home = (props) => {
  return (
    <View>
      <MenuButton navigation={props.navigation} />
      <View style={styles.home}>
        <View style={styles.homeBtns}>
          <TouchableOpacity title="Add Trip">
            <Text style={styles.addTripBtn}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homeBtns}>
          <TouchableOpacity title="History/Edit Trip">
            <Text style={styles.editTripBtn}>Edit Trip History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;