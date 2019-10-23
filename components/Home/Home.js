import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

import MenuButton from "../../navigation/MenuButton/MenuButton";

const Home = (props) => {
  return (
    <View style={styles.home}>
      <MenuButton navigation={props.navigation} />
      <View style={styles.addTripBtn}>
        <Button title="Add Trip" />
      </View>
      <View style={styles.editTripBtn}>
        <Button title="History/Edit Trip" />
      </View>
    </View>
  );
}

export default Home;
