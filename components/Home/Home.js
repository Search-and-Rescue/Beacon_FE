import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.addTripBtn}>
        <Button title='Add Trip' />
      </View>
      <View style={styles.editTripBtn}>
        <Button title='History/Edit Trip' />
      </View>
    </View>
  )
}

export default Home;
